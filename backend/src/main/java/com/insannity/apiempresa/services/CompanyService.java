package com.insannity.apiempresa.services;

import com.insannity.apiempresa.dto.CompanyDTO;
import com.insannity.apiempresa.entities.Company;
import com.insannity.apiempresa.exceptions.DataBaseException;
import com.insannity.apiempresa.exceptions.EntityNotFoundException;
import com.insannity.apiempresa.repositories.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CompanyService {

    @Autowired
    private CompanyRepository repository;

    @Transactional(readOnly = true)
    public List<CompanyDTO> findAll(){
        List<Company> list = repository.findAll();
        return list.stream().map(x -> new CompanyDTO(x)).collect(Collectors.toList());
    }

    @Transactional
    public CompanyDTO insert(CompanyDTO companyDTO) {
       Company entity = new Company(companyDTO);
       Company entitySaved = repository.save(entity);
       return new CompanyDTO(entitySaved);

    }

    @Transactional(readOnly = true)
    public CompanyDTO findById(Long id){
        Company entity = verifyIsExisting(id);
        return new CompanyDTO(entity);
    }

    public CompanyDTO update(Long id, CompanyDTO dto) {
            Company entity = verifyIsExisting(id);
            copyDtoToEntity(dto, entity);
            entity = repository.save(entity);
            return new CompanyDTO(entity);
    }

    public void delete(Long id) {
        try {
            repository.deleteById(id);
        }catch(EmptyResultDataAccessException e) {
            throw new EntityNotFoundException("Id "+id+" nao encontrado.");
        }catch(DataIntegrityViolationException e) {
            throw new DataBaseException("Violação de integridade.");
        }

    }

    private void copyDtoToEntity(CompanyDTO companyDTO, Company company){
        company.setCodigo(companyDTO.getCodigo());
        company.setCnpj(companyDTO.getCnpj());
        company.setEmail(companyDTO.getEmail());
        company.setEndereco(companyDTO.getEndereco());
        company.setTelefone(companyDTO.getTelefone());
    }

    private Company verifyIsExisting(Long id){
        return repository.findById(id).orElseThrow(() -> new EntityNotFoundException("Id "+id+" não encontrado!"));
    }
}
