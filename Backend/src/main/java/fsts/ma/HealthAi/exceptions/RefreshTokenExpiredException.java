package fsts.ma.HealthAi.exceptions;

public class RefreshTokenExpiredException extends Exception{
    public RefreshTokenExpiredException(String message){
        super(message);
    }
}
