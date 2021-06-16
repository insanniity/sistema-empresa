package com.insannity.apiempresa.repositories;

import com.insannity.apiempresa.entities.Collaborator;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CollaboratorRepository extends JpaRepository<Collaborator, String> {
}
