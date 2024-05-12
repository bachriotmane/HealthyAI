package fsts.ma.HealthAi.service.imp;

import fsts.ma.HealthAi.dto.AuthenticationDTO;
import fsts.ma.HealthAi.dto.PatientDto;
import fsts.ma.HealthAi.entities.Patient;
import fsts.ma.HealthAi.entities.RoleApp;
import fsts.ma.HealthAi.entities.Validation;
import fsts.ma.HealthAi.enums.Role;
import fsts.ma.HealthAi.exceptions.ActivationException;
import fsts.ma.HealthAi.exceptions.RefreshTokenExpiredException;
import fsts.ma.HealthAi.mappers.PatientMapper;
import fsts.ma.HealthAi.repositories.PatientRepo;
import fsts.ma.HealthAi.repositories.RoleAppRepo;
import fsts.ma.HealthAi.service.JwtService;
import fsts.ma.HealthAi.service.PatientService;
import fsts.ma.HealthAi.service.ValidationService;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
@AllArgsConstructor
@Service
public class PatientServiceImpl implements PatientService, UserDetailsService {
    private final PatientRepo userAppRepository;
    private final ValidationService validationService;
    private final JwtService jwtService;
    private final RoleAppRepo roleRepository;
    private final PatientMapper patientMapper;





    @Override
    public Patient registerUser(Patient userApp) {

        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

        RoleApp roleApp = new RoleApp();
        roleApp.setRole(Role.PATIENT);
        roleApp = roleRepository.save(roleApp);

        List<RoleApp> roles = new ArrayList<>();
        roles.add(roleApp);
        userApp.setRoles(roles);

        String encodedPassword = passwordEncoder.encode(userApp.getPassword());
        userApp.setPassword(encodedPassword);
        userApp.setActive(false);
        Patient userApp1 =  savePatient(userApp);
        System.out.println(userApp1.toString());
        validationService.addNewValidation(userApp1);
        return userApp1;

    }


    @Override
    public Patient savePatient(Patient patient){
        return userAppRepository.save(patient);
    }


    @Override
    public void activationAccount(Map<String, String> activation) throws ActivationException {
        String code = activation.get("code");
        Validation validation = validationService.getValidationBuCode(code);
        if(Instant.now().isAfter(validation.getExpireAt())){
            throw new ActivationException("Code already expired!!");
        }
        Patient user = validation.getUserApp();
        user.setActive(true);
        userAppRepository.save(user);
    }

    @Override
    public Map<String, String> connexion(AuthenticationDTO authenticationDTO) throws RefreshTokenExpiredException {
        return jwtService.generateToken(authenticationDTO);
    }
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userAppRepository.findPatientByUsername(username);
    }

    @Override
    public Optional<Patient> getPatient(Long id) {
        return userAppRepository.findById(id);
    }

    @Override
    public Patient getPatientByusername(String username) {
        return userAppRepository.findPatientByUsername(username);
    }

    @Override
    public List<Patient> getAllPatient() {
        return userAppRepository.findAll();
    }

    @Override
    public String addPatient(PatientDto patientDto) {
        userAppRepository.save(patientMapper.fromDTO(patientDto));
        return "patient saved successfully";
    }

    @Override
    public String deletePatient(Long id) {
        userAppRepository.deleteById(id);
        return "deleted successfully";
    }
}
