package fsts.ma.HealthAi.service.imp;

import fsts.ma.HealthAi.dto.AnalyseDto;
import fsts.ma.HealthAi.entities.Analyse;
import fsts.ma.HealthAi.mappers.AnalyseMapper;
import fsts.ma.HealthAi.repositories.AnalyseRepo;
import fsts.ma.HealthAi.service.AnalyseService;
import jakarta.websocket.server.ServerEndpoint;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class AnalyseServiceImp implements AnalyseService {
    private final AnalyseRepo analyseRepo;

    @Override
    public Optional<Analyse> getAnalyse(Long id) {
        return analyseRepo.findById(id);
    }

    @Override
    public String deleteAnalyse(Long id) {
         analyseRepo.deleteById(id);
         return "analyse deleted successfully";
    }

    @Override
    public String addAnalyse(Analyse analyse) {

         analyseRepo.save(analyse);
         return "analyse added successfully";
    }

    @Override
    public List<Analyse> getAllAnalyse() {
        return analyseRepo.findAll();
    }
}
