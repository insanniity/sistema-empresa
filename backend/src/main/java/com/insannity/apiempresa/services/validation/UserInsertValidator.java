package com.insannity.apiempresa.services.validation;

import com.insannity.apiempresa.dto.UserInsertDTO;
import com.insannity.apiempresa.entities.FieldMessage;
import com.insannity.apiempresa.entities.User;
import com.insannity.apiempresa.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.util.ArrayList;
import java.util.List;

public class UserInsertValidator implements ConstraintValidator<UserInsertValid, UserInsertDTO> {
	
	@Autowired
	private UserRepository repository;
	
	@Override
	public void initialize(UserInsertValid ann) {
	}

	@Override
	public boolean isValid(UserInsertDTO dto, ConstraintValidatorContext context) {
		
		List<FieldMessage> list = new ArrayList<>();
		
		
		User user = repository.findByEmail(dto.getEmail());
		if(user != null) {
			list.add(new FieldMessage("email", "Email ja foi ultilizado"));
		}
		
		for (FieldMessage e : list) {
			context.disableDefaultConstraintViolation();
			context.buildConstraintViolationWithTemplate(e.getMessage()).addPropertyNode(e.getFieldName())
					.addConstraintViolation();
		}
		return list.isEmpty();
	}
}