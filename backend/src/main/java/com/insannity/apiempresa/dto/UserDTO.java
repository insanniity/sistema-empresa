package com.insannity.apiempresa.dto;

import com.insannity.apiempresa.entities.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.io.Serializable;


@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserDTO implements Serializable{
	
	
	private static final long serialVersionUID = 1L;
	
	private Long id;
	@NotBlank(message = "Campo obrigatório")
	private String name;	
	@Email(message= "Favor digitar um email válido")
	private String email;
	
	//Set<RoleDTO> roles = new HashSet<>();
	
	public UserDTO(User entity) {
		id = entity.getId();
		name = entity.getName();		
		email = entity.getEmail();
		//entity.getRoles().forEach(role -> this.roles.add(new RoleDTO(role)));
	}



	//public Set<RoleDTO> getRoles() {
	//	return roles;
	//}
	
	
	
	
}
