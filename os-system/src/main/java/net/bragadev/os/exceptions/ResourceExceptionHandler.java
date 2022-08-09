package net.bragadev.os.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ResourceExceptionHandler {
	
	@ExceptionHandler(DataException.class)
	public ResponseEntity<String> ObjectNotFoundException(DataException e){
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.toString());
	}
}




















