package com.insannity.apiempresa.dto;

import com.insannity.apiempresa.entities.Company;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.br.CNPJ;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CompanyDTO {

    private String id;
    @NotBlank(message = "Campo Obrigatório")
    @CNPJ
    private String cnpj;
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
//    private List<CollaboratorDTO> collaborators = new ArrayList<>();

    public CompanyDTO (Company company){
        this.id = company.getId();
        this.cnpj = company.getCnpj();
        this.nome = company.getNome();
        this.email = company.getEmail();
        this.telefone = company.getTelefone();
        this.endereco = company.getEndereco();
    }


}
