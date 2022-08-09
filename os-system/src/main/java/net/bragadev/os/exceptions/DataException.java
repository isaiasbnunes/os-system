package net.bragadev.os.exceptions;

public class DataException extends RuntimeException{

	private static final long serialVersionUID = 1L;
	
	private String message;
	
	public DataException(String message) {
		super();
		this.message = message;
	}

	@Override
	public String toString() {
		return message;
	}
	
	
}
