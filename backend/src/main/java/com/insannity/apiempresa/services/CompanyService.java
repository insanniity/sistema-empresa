package com.insannity.apiempresa.services;

import com.insannity.apiempresa.dto.CompanyDTO;
import com.insannity.apiempresa.entities.Company;
import com.insannity.apiempresa.exceptions.DataBaseException;
import com.insannity.apiempresa.exceptions.EntityNotFoundException;
import com.insannity.apiempresa.repositories.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CompanyService {

    @Autowired
    private CompanyRepository repository;

    @Transactional(readOnly = true)
    public Page<CompanyDTO> findAll(PageRequest pageRequest){
        Page<Company> list = repository.findAll(pageRequest);
        return list.map(x -> new CompanyDTO(x));
    }

    @Transactional
    public CompanyDTO insert(CompanyDTO companyDTO) {
       Company entity = new Company(companyDTO);
       Company entitySaved = repository.save(entity);
       return new CompanyDTO(entitySaved);

    }

    @Transactional(readOnly = true)
    public CompanyDTO findById(String id){
        Company entity = verifyIsExisting(id);
        return new CompanyDTO(entity);
    }

    public CompanyDTO update(String id, CompanyDTO dto) {
            Company entity = verifyIsExisting(id);
            copyDtoToEntity(dto, entity);
            entity = repository.save(entity);
            return new CompanyDTO(entity);
    }

    public void delete(String id) {
        try {
            repository.deleteById(id);
        }catch(EmptyResultDataAccessException e) {
            throw new EntityNotFoundException("Id "+id+" nao encontrado.");
        }catch(DataIntegrityViolationException e) {
            throw new DataBaseException("Violação de integridade.");
        }

    }

    private void copyDtoToEntity(CompanyDTO companyDTO, Company company){
        company.setNome(companyDTO.getNome());
        company.setCnpj(companyDTO.getCnpj());
        company.setEmail(companyDTO.getEmail());
        company.setEndereco(companyDTO.getEndereco());
        company.setTelefone(companyDTO.getTelefone());
    }

    private Company verifyIsExisting(String id){
        return repository.findById(id).orElseThrow(() -> new EntityNotFoundException("Id "+id+" não encontrado!"));
    }
}
