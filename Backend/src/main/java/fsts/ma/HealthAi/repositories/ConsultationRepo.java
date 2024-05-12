package fsts.ma.HealthAi.repositories;

import fsts.ma.HealthAi.entities.Consultation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConsultationRepo extends JpaRepository<Consultation,Long> {
}
