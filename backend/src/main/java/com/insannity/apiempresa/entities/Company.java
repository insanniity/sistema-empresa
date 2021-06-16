package com.insannity.apiempresa.entities;

import com.insannity.apiempresa.dto.CompanyDTO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Table(name = "tbl_company")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Company {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String codigo;
    private String cnpj;
    private String nome;
    private String email;
    private String telefone;
    private String endereco;

//    @OneToMany(mappedBy = "collaborators")
//    private List<Collaborator> collaborators = new ArrayList<>();

    public Company(CompanyDTO companyDTO){
        this.id = companyDTO.getId();
        this.codigo = companyDTO.getCodigo();
        this.cnpj = companyDTO.getCnpj();
        this.nome = companyDTO.getNome();
        this.email = companyDTO.getEmail();
        this.telefone = companyDTO.getTelefone();
        this.endereco = companyDTO.getEndereco();
    }




}
