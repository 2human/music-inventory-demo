package com.toohuman.model;

public class Order {
	private String message;
	private String email;
	private String total;
	private String firstName;
	private String lastName;
	
	public Order() {
		
	}
	
	public Order(String message, String email, String total, String firstName, String lastName) {
		this.message = message;
		this.email = email;
		this.total = total;
		this.firstName = firstName;
		this.lastName = lastName;
	}	

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTotal() {
		return total;
	}

	public void setTotal(String total) {
		this.total = total;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

}
