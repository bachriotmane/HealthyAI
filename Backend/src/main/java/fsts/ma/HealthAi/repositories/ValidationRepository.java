package fsts.ma.HealthAi.repositories;


import fsts.ma.HealthAi.entities.Validation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ValidationRepository extends JpaRepository<Validation,Long> {
    public Validation findValidationByCode(String code);
}
