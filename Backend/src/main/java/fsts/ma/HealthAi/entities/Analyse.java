package fsts.ma.HealthAi.entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@NoArgsConstructor
@Data
@Builder
@AllArgsConstructor
public class Analyse {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(length = 100000)
    private String name;
    @Column(length = 100000)
    private String text;
}
