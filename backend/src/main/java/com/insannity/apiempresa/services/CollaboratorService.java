package com.insannity.apiempresa.services;

import com.insannity.apiempresa.dto.CollaboratorDTO;
import com.insannity.apiempresa.entities.Collaborator;
import com.insannity.apiempresa.entities.Company;
import com.insannity.apiempresa.exceptions.DataBaseException;
import com.insannity.apiempresa.exceptions.EntityNotFoundException;
import com.insannity.apiempresa.repositories.CollaboratorRepository;
import com.insannity.apiempresa.repositories.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CollaboratorService {

    @Autowired
    private CollaboratorRepository repository;

    @Autowired
    private CompanyRepository companyRepository;

    @Transactional(readOnly = true)
    public Page<CollaboratorDTO> findAll(PageRequest pageRequest, String companyId){
        Page<Collaborator> list = repository.findAll(pageRequest, companyId);
        return list.map(x -> new CollaboratorDTO(x));
    }

    @Transactional
    public CollaboratorDTO insert(CollaboratorDTO collaboratorDTO) {
        Company company = companyRepository.getById(collaboratorDTO.getCompanyId());
        Collaborator entity = new Collaborator(collaboratorDTO, company);
        Collaborator entitySaved = repository.save(entity);
        return new CollaboratorDTO(entitySaved);
    }

    @Transactional(readOnly = true)
    public CollaboratorDTO findById(String id){
        Collaborator entity = verifyIsExisting(id);
        return new CollaboratorDTO(entity);
    }

    public CollaboratorDTO update(String id, CollaboratorDTO dto) {
        Collaborator entity = verifyIsExisting(id);
        copyDtoToEntity(dto, entity);
        entity = repository.save(entity);
        return new CollaboratorDTO(entity);
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


    private void copyDtoToEntity(CollaboratorDTO collaboratorDTO, Collaborator collaborator){
        collaborator.setCpf(collaboratorDTO.getCpf());
        collaborator.setNome(collaboratorDTO.getNome());
        collaborator.setEmail(collaboratorDTO.getEmail());
        collaborator.setTelefone(collaboratorDTO.getTelefone());
        collaborator.setEndereco(collaboratorDTO.getEndereco());
        collaborator.setCompany(companyRepository.getById(collaboratorDTO.getCompanyId()));
    }

    private Collaborator verifyIsExisting(String id){
        return repository.findById(id).orElseThrow(() -> new EntityNotFoundException("Id "+id+" não encontrado!"));
    }


}
