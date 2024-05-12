package fsts.ma.HealthAi.service;



import fsts.ma.HealthAi.dto.AuthenticationDTO;
import fsts.ma.HealthAi.exceptions.RefreshTokenExpiredException;

import java.util.Map;

public interface JwtService {
    public Map<String,String> generateToken(AuthenticationDTO authenticationDTO) throws RefreshTokenExpiredException;
}
