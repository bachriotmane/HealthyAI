package fsts.ma.HealthAi.entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@ToString
@Entity
@NoArgsConstructor
@Data
@Builder
@AllArgsConstructor
public class Consultation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Date date;
    @Column(length = 65555)
    private String conversation;
    @Column(length = 65555)
    private String summer;
    @Column(length = 65555)
    private String conseils;

}
