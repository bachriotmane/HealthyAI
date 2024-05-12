package fsts.ma.HealthAi.service.imp;

import fsts.ma.HealthAi.entities.Consultation;
import fsts.ma.HealthAi.repositories.ConsultationRepo;
import fsts.ma.HealthAi.service.ConsultationService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ConsultationServiceImp implements ConsultationService {

    private final ConsultationRepo consultationRepo;

    @Override
    public Optional<Consultation> getConsultation(Long id) {
        return consultationRepo.findById(id);
    }

    @Override
    public List<Consultation> getAllConsultation() {
        return consultationRepo.findAll();
    }

    @Override
    public String addConsultation(Consultation consultation) {
        consultationRepo.save(consultation);
        return "consultation added successfully";
    }

    @Override
    public String deleteConsultation(Long id) {
        consultationRepo.deleteById(id);
        return "consultation deleted successfully ";
    }
}
