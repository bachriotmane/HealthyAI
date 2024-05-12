package fsts.ma.HealthAi.dto;

public record AuthenticationDTO(
        String username,
        String password,
        boolean withRefreshToken,
        String refreshToken,
        String grantType
) {}