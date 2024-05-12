package fsts.ma.HealthAi;

import fsts.ma.HealthAi.entities.Analyse;
import fsts.ma.HealthAi.entities.Consultation;
import fsts.ma.HealthAi.entities.Patient;
import fsts.ma.HealthAi.repositories.AnalyseRepo;
import fsts.ma.HealthAi.repositories.ConsultationRepo;
import fsts.ma.HealthAi.repositories.PatientRepo;
import fsts.ma.HealthAi.security.RsaKeyConfig;
import lombok.AllArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@SpringBootApplication
@EnableConfigurationProperties(RsaKeyConfig.class)
@AllArgsConstructor
public class HealthAiApplication implements CommandLineRunner {
	private final AnalyseRepo analyseRepo;
	private final ConsultationRepo consultationRepo ;
	private final PatientRepo patientRepo;
	public static void main(String[] args) {
		SpringApplication.run(HealthAiApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		Analyse analyse = Analyse.builder()
				.text("something something")
				.name("analyse 1")
				.build();
Analyse analyse1 = Analyse.builder()
				.text("something something")
				.name("analyse2")
				.build();
Analyse analyse2 = Analyse.builder()
				.text("something something")
				.build();

		Consultation consultation = Consultation.builder()
				.conseils("some thing")
				.conversation("Conversation")
				.date(new Date())
				.summer("summarize")
				.build();
Consultation consultation2 = Consultation.builder()
				.conseils("some thing")
				.conversation("Conversation")
				.date(new Date())
				.summer("summarize")
				.build();
Consultation consultation3 = Consultation.builder()
				.conseils("some thing")
				.conversation("Conversation")
				.date(new Date())
				.summer("summarize")
				.build();

		analyseRepo.save(analyse);
		analyseRepo.save(analyse1);
		analyseRepo.save(analyse2);
		consultationRepo.save(consultation);
		consultationRepo.save(consultation2);
		consultationRepo.save(consultation3);
		List<Analyse> analyses = new ArrayList<>();
		analyses.add(analyse);
		analyses.add(analyse1);

		List<Consultation> consultations = new ArrayList<>();
		consultations.add(consultation);
		consultations.add(consultation2);

		Patient patient = Patient.builder()
				.age(23)
				.email("simo@gmail.com")
				.username("simo")
				.analyses(analyses)
				.build();
		Patient patient1 = Patient.builder()
				.age(23)
				.email("hamza@gmail.com")
				.username("hamza")
				.consultationList(consultations)
				.build();

		patientRepo.save(patient);
		patientRepo.save(patient1);
	}


}
