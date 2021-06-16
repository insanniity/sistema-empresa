package com.insannity.apiempresa.dto;

import com.insannity.apiempresa.entities.Collaborator;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.br.CPF;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CollaboratorDTO {

    private Long id;
    private String codigo;
    @NotBlank(message = "Campo Obrigatório")
    @CPF
    private String cpf;
    @NotBlank(message = "Campo Obrigatório")
    private String nome;
    @NotBlank(message = "Campo Obrigatório")
    @Email(message = "O email não é válido")
    private String email;
    @NotBlank(message = "Campo Obrigatório")
    @Size(min = 10, max = 15)
    private String telefone;
    @NotBlank(message = "Campo Obrigatório")
    private String endereco;
    @NotBlank(message = "Campo Obrigatório")
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
