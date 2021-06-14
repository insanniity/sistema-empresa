package com.insannity.apiempresa.entities;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Table(name = "tbl_collaborator")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Collaborator {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String codigo;
    private String cpf;
    private String nome;
    private String email;
    private String telefone;
    private String endereco;

    @ManyToOne
    @JoinColumn(name = "company_id")
    private Company company;

}
