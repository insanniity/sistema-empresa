package com.insannity.apiempresa.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

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

    @OneToMany(mappedBy = "company")
    private List<Collaborator> collaborators = new ArrayList<>();


}
