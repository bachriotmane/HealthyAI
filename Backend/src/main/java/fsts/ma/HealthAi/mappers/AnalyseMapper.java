package fsts.ma.HealthAi.mappers;

import fsts.ma.HealthAi.dto.AnalyseDto;
import fsts.ma.HealthAi.dto.PatientDto;
import fsts.ma.HealthAi.entities.Analyse;
import fsts.ma.HealthAi.entities.Patient;

public interface AnalyseMapper {
    public Analyse fromDTO(AnalyseDto analyseDto);
    public AnalyseDto fromEntity(Analyse analyse );

}
