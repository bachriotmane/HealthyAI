package fsts.ma.HealthAi.service;


import fsts.ma.HealthAi.entities.Patient;
import fsts.ma.HealthAi.entities.Validation;

public interface ValidationService {
    public Validation addNewValidation(Patient userApp);
    public Validation getValidationBuCode(String code);
}
