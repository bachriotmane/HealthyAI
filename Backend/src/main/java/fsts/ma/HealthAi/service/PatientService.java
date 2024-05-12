package fsts.ma.HealthAi.service;

import fsts.ma.HealthAi.dto.AuthenticationDTO;
import fsts.ma.HealthAi.dto.PatientDto;
import fsts.ma.HealthAi.entities.Patient;
import fsts.ma.HealthAi.exceptions.ActivationException;
import fsts.ma.HealthAi.exceptions.RefreshTokenExpiredException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;
import java.util.Map;
import java.util.Optional;

public interface PatientService extends UserDetailsService {
    UserDetails loadUserByUsername(String username);

    Optional<Patient> getPatient(Long id);
    Patient getPatientByusername(String username);
    List<Patient> getAllPatient();
    String addPatient(PatientDto patientDto);
    String deletePatient(Long id);
    public Patient registerUser( Patient userApp);
    public void activationAccount(Map<String, String> code) throws ActivationException;
    public Map <String,String> connexion(AuthenticationDTO authenticationDTO) throws RefreshTokenExpiredException;
    public Patient savePatient(Patient patient);
}
