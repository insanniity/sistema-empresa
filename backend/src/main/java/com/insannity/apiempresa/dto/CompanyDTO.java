package com.insannity.apiempresa.dto;

import com.insannity.apiempresa.entities.Company;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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
//    private List<CollaboratorDTO> collaborators = new ArrayList<>();

    public CompanyDTO (Company company){
        this.id = company.getId();
        this.codigo = company.getCodigo();
        this.cnpj = company.getCnpj();
        this.nome = company.getNome();
        this.email = company.getEmail();
        this.telefone = company.getTelefone();
        this.endereco = company.getEndereco();
    }


}
