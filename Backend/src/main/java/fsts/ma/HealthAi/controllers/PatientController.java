package fsts.ma.HealthAi.controllers;

import fsts.ma.HealthAi.dto.PatientDto;
import fsts.ma.HealthAi.entities.Analyse;
import fsts.ma.HealthAi.entities.Consultation;
import fsts.ma.HealthAi.entities.Patient;
import fsts.ma.HealthAi.mappers.PatientMapper;
import fsts.ma.HealthAi.repositories.PatientRepo;
import fsts.ma.HealthAi.service.AnalyseService;
import fsts.ma.HealthAi.service.ConsultationService;
import fsts.ma.HealthAi.service.PatientService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/patient")
@AllArgsConstructor
public class PatientController {

    private final PatientService patientService;
    private final PatientMapper patientMapper;
    private final PatientRepo patientRepo;
    private final AnalyseService analyseService;
    private final ConsultationService consultationService;

    @GetMapping("/{id}")
    public ResponseEntity<?> getUserByid(@PathVariable Long id) {
        Optional<Patient> patient = patientService.getPatient(id);
        if (patient.isPresent()) {
            return new ResponseEntity<>(patientMapper.fromEntity(patient.get()), HttpStatus.OK);
        } else {
            return new ResponseEntity<>("user not found !", HttpStatus.NOT_FOUND);
        }
    }
    @GetMapping("/username/{username}")
    public ResponseEntity<?> getUserByUser(@PathVariable String username ) {
        Patient patient = patientService.getPatientByusername(username);
        if (patient != null) {
            return new ResponseEntity<>(patientMapper.fromEntity(patient), HttpStatus.OK);
        } else {
            return new ResponseEntity<>("user not found !", HttpStatus.NOT_FOUND);
        }
    }
    @GetMapping("/analyse/{username}")
    public ResponseEntity<?> getAllAnalyses(@PathVariable String username)
    {
        Patient patient = patientService.getPatientByusername(username);
        if(patient != null )
        {
            if(!patient.getAnalyses().isEmpty())
            {
                return  new ResponseEntity<>(patient.getAnalyses(),HttpStatus.OK);
            }
            else {
                return new ResponseEntity<>("this patient doesnt has any analyses",HttpStatus.ACCEPTED);
            }
        }
        else {

            return new ResponseEntity<>("this patient not found",HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/analyse/{username}")
    public ResponseEntity<?> addAnalyseToUser(@RequestBody Analyse analyse,@PathVariable String username)
    {
        Patient patient = patientService.getPatientByusername(username);
        if(patient != null )
        {
            analyseService.addAnalyse(analyse);
            patient.getAnalyses().add(analyse);
            patientRepo.save(patient);

                return new ResponseEntity<>("analyse added succefully",HttpStatus.OK);
        }
        else {

            return new ResponseEntity<>("this patient not found",HttpStatus.NOT_FOUND);
        }
    }
    @PostMapping("/consultation/{username}")
    public ResponseEntity<?> addConsultationToUser(@RequestBody Consultation consultation, @PathVariable String username)
    {
        Patient patient = patientService.getPatientByusername(username);
        if(patient != null )
        {
            consultationService.addConsultation(consultation);
            patient.getConsultationList().add(consultation);
            patientRepo.save(patient);

                return new ResponseEntity<>("consultation added succefully",HttpStatus.OK);
        }
        else {

            return new ResponseEntity<>("this patient not found",HttpStatus.NOT_FOUND);
        }
    }
@GetMapping("/consultation/{username}")
    public ResponseEntity<?> getAllConsultation(@PathVariable String username)
    {
        Patient patient = patientService.getPatientByusername(username);
        if(patient !=null)
        {
            if(!patient.getConsultationList().isEmpty())
            {
                return  new ResponseEntity<>(patient.getConsultationList(),HttpStatus.OK);
            }
            else {
                return new ResponseEntity<>("this patient doesnt has any consultation",HttpStatus.ACCEPTED);
            }
        }
        else {

            return new ResponseEntity<>("this patient not found",HttpStatus.NOT_FOUND);
        }
    }
}