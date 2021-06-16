package com.insannity.apiempresa.controllers;

import com.insannity.apiempresa.dto.CollaboratorDTO;
import com.insannity.apiempresa.dto.CompanyDTO;
import com.insannity.apiempresa.services.CollaboratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/collaborators")
public class CollaboratorController {

    @Autowired
    private CollaboratorService service;

    @GetMapping
    public ResponseEntity<List<CollaboratorDTO>> findAll(){
        List<CollaboratorDTO> list = service.findAll();
        return ResponseEntity.ok().body(list);
    }

    @PostMapping
    public ResponseEntity<CollaboratorDTO> newCollaborator(@RequestBody CollaboratorDTO collaboratorDTO){
        collaboratorDTO = service.insert(collaboratorDTO);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(collaboratorDTO.getId()).toUri();
        return ResponseEntity.created(uri).body(collaboratorDTO);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<CollaboratorDTO> findById(@PathVariable Long id){
        CollaboratorDTO dto = service.findById(id);
        return ResponseEntity.ok().body(dto);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<CollaboratorDTO> update(@PathVariable Long id , @RequestBody CollaboratorDTO dto){
        dto = service.update(id, dto);
        return ResponseEntity.ok().body(dto);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity <CollaboratorDTO> delete(@PathVariable Long id){
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

}
