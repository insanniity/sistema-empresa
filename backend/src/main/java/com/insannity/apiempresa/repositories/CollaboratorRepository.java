package com.insannity.apiempresa.repositories;

import com.insannity.apiempresa.entities.Collaborator;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CollaboratorRepository extends JpaRepository<Collaborator, String> {

//    @Query("SELECT DISTINCT obj FROM Collaborator obj WHERE obj.company.id = :companyId ORDER BY obj.id ASC")
    @Query("SELECT DISTINCT obj FROM Collaborator obj WHERE (:companyId IS NULL OR obj.company.id = :companyId OR :companyId = '')")
    Page<Collaborator> findAll (Pageable pageble, String companyId);


}
