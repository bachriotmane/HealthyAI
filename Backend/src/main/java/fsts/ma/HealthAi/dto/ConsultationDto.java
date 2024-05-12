package fsts.ma.HealthAi.dto;

import java.util.Date;

public record ConsultationDto(
        Long id,

        Date date,
         String conversation,
        String summer,
        String conseils
) {
}
