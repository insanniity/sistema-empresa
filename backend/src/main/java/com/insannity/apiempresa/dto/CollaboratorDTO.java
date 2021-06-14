package com.insannity.apiempresa.dto;

import com.insannity.apiempresa.entities.Company;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CollaboratorDTO {

    private Long id;
    private String codigo;
    private String cpf;
    private String nome;
    private String email;
    private String telefone;
    private String endereco;
    private CompanyDTO company;

}
