package fsts.ma.HealthAi.dto;

import fsts.ma.HealthAi.enums.Sexe;

import java.util.List;

public record PatientDto(
        String firstName,
  String lastName,
  String username,
  String email,
    String password,
    int age,
    String tel,
    Sexe sexe,
   List<Long> analyseIds,
   List<Long> consultationIds

) {
}
