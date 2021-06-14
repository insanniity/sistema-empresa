package com.insannity.apiempresa.repositories;

import com.insannity.apiempresa.entities.Company;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompanyRepository extends JpaRepository<Company, Long> {
}
