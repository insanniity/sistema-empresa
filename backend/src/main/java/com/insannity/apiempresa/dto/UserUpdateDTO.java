package com.insannity.apiempresa.dto;

import com.insannity.apiempresa.services.validation.UserUpdateValid;

@UserUpdateValid
public class UserUpdateDTO extends UserDTO{
	private static final long serialVersionUID = 1L;		
	
	private String password;
	
	public UserUpdateDTO() {
		super();
	}
	
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
