package fsts.ma.HealthAi.service;


import fsts.ma.HealthAi.entities.Validation;

public interface NotificationService {
    public void envoyerEmailVerificationUser(Validation validation);
}
