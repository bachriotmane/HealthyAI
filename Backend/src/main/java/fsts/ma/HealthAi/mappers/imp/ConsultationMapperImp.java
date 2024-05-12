package fsts.ma.HealthAi.mappers.imp;

import fsts.ma.HealthAi.dto.ConsultationDto;
import fsts.ma.HealthAi.entities.Consultation;
import fsts.ma.HealthAi.mappers.ConsultationMapper;
import org.springframework.stereotype.Component;

@Component
public class ConsultationMapperImp implements ConsultationMapper {
    @Override
    public Consultation fromDTO(ConsultationDto consultationDto) {
        return null;
    }

    @Override
    public ConsultationDto fromEntity(Consultation consultation) {
        return null;
    }
}
