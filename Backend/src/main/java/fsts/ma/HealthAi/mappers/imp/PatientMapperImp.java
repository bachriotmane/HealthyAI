package fsts.ma.HealthAi.mappers.imp;

import fsts.ma.HealthAi.dto.PatientDto;
import fsts.ma.HealthAi.entities.Analyse;
import fsts.ma.HealthAi.entities.Consultation;
import fsts.ma.HealthAi.entities.Patient;
import fsts.ma.HealthAi.mappers.PatientMapper;
import fsts.ma.HealthAi.repositories.AnalyseRepo;
import fsts.ma.HealthAi.repositories.ConsultationRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.stream.Collectors;

@AllArgsConstructor
@Component
public class PatientMapperImp implements PatientMapper {
     private final AnalyseRepo analyseRepo;
    private final ConsultationRepo consultationRepo;
    @Override
    public Patient fromDTO(PatientDto patientDto) {
        return Patient.builder()
                .firstName(patientDto.firstName())
                .lastName(patientDto.lastName())
                .username(patientDto.username())
                .email(patientDto.email())
                .password(patientDto.password())
                .age(patientDto.age())
                .tel(patientDto.tel())
                .sexe(patientDto.sexe())
                .analyses(patientDto.analyseIds().stream().map(analyseRepo::getReferenceById).collect(Collectors.toList()))
                .consultationList(patientDto.consultationIds().stream().map(consultationRepo::getReferenceById).collect(Collectors.toList()))
                .build();
    }

    @Override
    public PatientDto fromEntity(Patient patient) {
        return new PatientDto(
                patient.getFirstName(),
                patient.getLastName(),
                patient.getUsername(),
                patient.getEmail(),
                patient.getPassword(),
                patient.getAge(),
                patient.getTel(),
                patient.getSexe(),
                patient.getAnalyses().stream().map(Analyse::getId).collect(Collectors.toList()),
                patient.getConsultationList().stream().map(Consultation::getId).collect(Collectors.toList())
        );
    }
}
