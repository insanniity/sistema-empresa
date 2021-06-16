package com.insannity.apiempresa.dto;

import com.insannity.apiempresa.entities.Collaborator;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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
    private Long companyId;

    public CollaboratorDTO(Collaborator collaborator) {
        this.id = collaborator.getId();
        this.codigo = collaborator.getCodigo();
        this.cpf = collaborator.getCpf();
        this.nome = collaborator.getNome();
        this.email = collaborator.getEmail();
        this.telefone = collaborator.getTelefone();
        this.endereco = collaborator.getEndereco();
        this.companyId = collaborator.getCompany().getId();
    }
}
