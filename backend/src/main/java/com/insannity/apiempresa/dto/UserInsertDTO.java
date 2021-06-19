package com.insannity.apiempresa.dto;

import com.insannity.apiempresa.services.validation.UserInsertValid;

@UserInsertValid
public class UserInsertDTO extends UserDTO{
	
	private static final long serialVersionUID = 1L;
	
	private String password;
	
	public UserInsertDTO() {
		super();
	}
	
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	
	

}
