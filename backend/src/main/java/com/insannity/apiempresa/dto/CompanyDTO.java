package com.insannity.apiempresa.dto;

import com.insannity.apiempresa.entities.Collaborator;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CompanyDTO {

    private Long id;
    private String codigo;
    private String cnpj;
    private String nome;
    private String email;
    private String telefone;
    private String endereco;
    private List<CollaboratorDTO> collaborators = new ArrayList<>();


}
