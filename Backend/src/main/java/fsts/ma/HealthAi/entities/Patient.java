package fsts.ma.HealthAi.entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import fsts.ma.HealthAi.enums.Sexe;
import jakarta.persistence.*;

import lombok.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Patient implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    private String username;
    private String email;
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;
    private int age;
    private String tel;
    private Sexe sexe;
    private boolean active;

    @OneToMany
    private List<Consultation> consultationList ;
    @OneToMany
    private List<Analyse> analyses;

    @ManyToMany(fetch = FetchType.EAGER)
    private List<RoleApp> roles = new ArrayList<>();

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<GrantedAuthority> authorities = new ArrayList<>();

        for (RoleApp role : roles) {
            authorities.add(new SimpleGrantedAuthority("ROLE_" + role.getRole().toString()));
        }
        return Collections.unmodifiableList(authorities);
    }

    @Override
    public boolean isAccountNonExpired() {
        return active;
    }

    @Override
    public boolean isAccountNonLocked() {
        return active;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return active;
    }

    @Override
    public boolean isEnabled() {
        return active;
    }
}
