package fsts.ma.HealthAi.service;

import fsts.ma.HealthAi.dto.AnalyseDto;
import fsts.ma.HealthAi.entities.Analyse;

import java.util.List;
import java.util.Optional;

public interface AnalyseService {

    Optional<Analyse> getAnalyse(Long id);
    String deleteAnalyse(Long id);
    String addAnalyse(Analyse analyse);
List<Analyse> getAllAnalyse();
}
