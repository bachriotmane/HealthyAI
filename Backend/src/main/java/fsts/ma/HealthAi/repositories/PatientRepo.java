package fsts.ma.HealthAi.repositories;

import fsts.ma.HealthAi.entities.Patient;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientRepo extends JpaRepository<Patient,Long> {
    public Patient findPatientByUsername(String username);
}
