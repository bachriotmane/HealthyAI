package fsts.ma.HealthAi.mappers.imp;

import fsts.ma.HealthAi.dto.AnalyseDto;
import fsts.ma.HealthAi.dto.PatientDto;
import fsts.ma.HealthAi.entities.Analyse;
import fsts.ma.HealthAi.entities.Patient;
import fsts.ma.HealthAi.mappers.AnalyseMapper;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.stream.Collectors;

@AllArgsConstructor
@Component
public class AnalyseMapperImp implements AnalyseMapper {

    @Override
    public Analyse fromDTO(AnalyseDto analyseDto) {
        return null;
    }


    @Override
    public AnalyseDto fromEntity(Analyse analyse) {
        return new AnalyseDto(analyse.getId(), analyse.getText());
    }
}
