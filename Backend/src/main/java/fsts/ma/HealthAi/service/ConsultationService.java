package fsts.ma.HealthAi.service;

import fsts.ma.HealthAi.entities.Consultation;

import java.util.List;
import java.util.Optional;

public interface ConsultationService {
    Optional<Consultation> getConsultation(Long id);
    List<Consultation> getAllConsultation();
    String addConsultation(Consultation consultation);
    String deleteConsultation(Long id);
}
