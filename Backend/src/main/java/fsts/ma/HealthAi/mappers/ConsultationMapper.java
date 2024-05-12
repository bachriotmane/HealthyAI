package fsts.ma.HealthAi.mappers;

import fsts.ma.HealthAi.dto.ConsultationDto;
import fsts.ma.HealthAi.entities.Consultation;

public interface ConsultationMapper {
    public Consultation fromDTO(ConsultationDto consultationDto);
    public ConsultationDto fromEntity(Consultation consultation );

}
