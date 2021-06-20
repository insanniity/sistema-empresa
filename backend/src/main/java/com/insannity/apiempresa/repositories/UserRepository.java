package com.insannity.apiempresa.repositories;

import com.insannity.apiempresa.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository  extends JpaRepository<User, Long>{
	User findByEmail(String email);
}	
