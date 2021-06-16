package com.insannity.apiempresa.entities;


import com.insannity.apiempresa.dto.CollaboratorDTO;
import com.insannity.apiempresa.repositories.CompanyRepository;
import com.insannity.apiempresa.services.CompanyService;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.*;

@Table(name = "tbl_collaborator")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Collaborator {

    @Id
    @GeneratedValue(generator = "company-generator")
    @GenericGenerator(name = "company-generator",
            parameters = @org.hibernate.annotations.Parameter(name = "prefix", value = "CLB-"),
            strategy = "com.insannity.apiempresa.configs.MyGenerator")
    private String id;
    private String cpf;
    private String nome;
    private String email;
    private String telefone;
    private String endereco;

    @ManyToOne
    @JoinColumn(name = "company_id")
    private Company company;

    public Collaborator(CollaboratorDTO collaboratorDTO, Company company) {
        this.id = collaboratorDTO.getId();
        this.cpf = collaboratorDTO.getCpf();
        this.nome = collaboratorDTO.getNome();
        this.email = collaboratorDTO.getEmail();
        this.telefone = collaboratorDTO.getTelefone();
        this.endereco = collaboratorDTO.getEndereco();
        this.company = company;
    }


}
