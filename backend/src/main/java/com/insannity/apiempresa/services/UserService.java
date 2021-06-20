package com.insannity.apiempresa.services;

import com.insannity.apiempresa.dto.UserDTO;
import com.insannity.apiempresa.dto.UserInsertDTO;
import com.insannity.apiempresa.dto.UserUpdateDTO;
import com.insannity.apiempresa.entities.Role;
import com.insannity.apiempresa.entities.User;
import com.insannity.apiempresa.exceptions.DataBaseException;
import com.insannity.apiempresa.repositories.RoleRepository;
import com.insannity.apiempresa.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import java.util.Optional;

@Service
public class UserService implements UserDetailsService{

	
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	@Autowired
	private UserRepository repository;
	
	@Autowired
	private RoleRepository roleRepository;
	
	@Transactional(readOnly = true)
	public Page<UserDTO> findAllPaged(PageRequest pageRequest){
		Page<User> list = repository.findAll(pageRequest);
		return list.map(x -> new UserDTO(x));
	}
	
	@Transactional(readOnly = true)
	public UserDTO findById(Long id) {		
		Optional<User> obj = repository.findById(id);
		User entity = obj.orElseThrow(() -> new EntityNotFoundException("User não encontrada"));
		return new UserDTO(entity);
		
	}
	
	@Transactional
	public UserDTO insert(UserInsertDTO dto) {
		User entity = new User();
		copyDtoToEntity(dto, entity);
		entity.setPassword(passwordEncoder.encode(dto.getPassword()));
		entity = repository.save(entity);
		return new UserDTO(entity);
	}
	
	@Transactional
	public UserDTO update(Long id, UserUpdateDTO dto) {
		try{
			User entity = repository.getById(id);
			copyDtoToEntity(dto, entity);
			entity = repository.save(entity);
			return new UserDTO(entity);
		}catch(EntityNotFoundException e) {
			throw new EntityNotFoundException("Id nao encontrado.");
		}		
	}
	

	private void copyDtoToEntity(UserDTO dto, User entity) {
		entity.setName(dto.getName());		
		entity.setEmail(dto.getEmail());
		entity.getRoles().clear();
		Role role = roleRepository.getById(1L);
		entity.getRoles().add(role);
		
	}

	public void delete(Long id) {
		try {
			repository.deleteById(id);
		}catch(EmptyResultDataAccessException e) {
			throw new EntityNotFoundException("Id nao encontrado.");
		}catch(DataIntegrityViolationException e) {
			throw new DataBaseException("Violação de integridade.");
		}
		
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = repository.findByEmail(username);
		if(user == null) {			
			throw new UsernameNotFoundException("Email não encontrado");
		}	
		
		return user;
	}
	
	
}