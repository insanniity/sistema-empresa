package com.insannity.apiempresa.entities;

import com.insannity.apiempresa.dto.CompanyDTO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Table(name = "tbl_company")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Company {

    @Id
    @GeneratedValue(generator = "company-generator")
    @GenericGenerator(name = "company-generator",
            parameters = @org.hibernate.annotations.Parameter(name = "prefix", value = "EMP-"),
            strategy = "com.insannity.apiempresa.configs.MyGenerator")
    private String id;
    private String cnpj;
    private String nome;
    private String email;
    private String telefone;
    private String endereco;

//    @OneToMany(mappedBy = "collaborators")
//    private List<Collaborator> collaborators = new ArrayList<>();

    public Company(CompanyDTO companyDTO){
        this.id = companyDTO.getId();
        this.cnpj = companyDTO.getCnpj();
        this.nome = companyDTO.getNome();
        this.email = companyDTO.getEmail();
        this.telefone = companyDTO.getTelefone();
        this.endereco = companyDTO.getEndereco();
    }




}
