package com.insannity.apiempresa.controllers;

import com.insannity.apiempresa.dto.CollaboratorDTO;
import com.insannity.apiempresa.services.CollaboratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;

@RestController
@RequestMapping(value = "/collaborators")
public class CollaboratorController {

    @Autowired
    private CollaboratorService service;

    @GetMapping
    public ResponseEntity<Page<CollaboratorDTO>> findAll(
            @RequestParam(value = "page", defaultValue = "0") Integer page,
            @RequestParam(value = "linesPerPage", defaultValue = "12") Integer linesPerPage,
            @RequestParam(value = "companyId", defaultValue = "") String companyId,
            @RequestParam(value = "orderBy", defaultValue = "nome") String orderBy,
            @RequestParam(value = "direction", defaultValue = "ASC") String direction){

        PageRequest pageRequest = PageRequest.of(page, linesPerPage, Sort.Direction.valueOf(direction), orderBy);
        Page<CollaboratorDTO> list = service.findAll(pageRequest, companyId);
        return ResponseEntity.ok().body(list);
    }

    @PostMapping
    public ResponseEntity<CollaboratorDTO> newCollaborator(@Valid @RequestBody CollaboratorDTO collaboratorDTO){
        collaboratorDTO = service.insert(collaboratorDTO);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(collaboratorDTO.getId()).toUri();
        return ResponseEntity.created(uri).body(collaboratorDTO);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<CollaboratorDTO> findById(@PathVariable String id){
        CollaboratorDTO dto = service.findById(id);
        return ResponseEntity.ok().body(dto);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<CollaboratorDTO> update(@PathVariable String id , @Valid @RequestBody CollaboratorDTO dto){
        dto = service.update(id, dto);
        return ResponseEntity.ok().body(dto);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity <CollaboratorDTO> delete(@PathVariable String id){
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

}
