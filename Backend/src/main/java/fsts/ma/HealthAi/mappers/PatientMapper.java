package fsts.ma.HealthAi.mappers;

import fsts.ma.HealthAi.dto.PatientDto;
import fsts.ma.HealthAi.entities.Patient;

public interface PatientMapper {
    public Patient fromDTO(PatientDto patientDto );
    public PatientDto fromEntity(Patient patient);
}
