package com.insannity.apiempresa.controllers;


import com.insannity.apiempresa.dto.CompanyDTO;
import com.insannity.apiempresa.services.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;

@RestController
@RequestMapping(value = "/companies")
public class CompanyController {

    @Autowired
    private CompanyService service;

    @GetMapping
    public ResponseEntity<Page<CompanyDTO>> findAll(
            @RequestParam(value = "page", defaultValue = "0") Integer page,
            @RequestParam(value = "linesPerPage", defaultValue = "12") Integer linesPerPage,
            @RequestParam(value = "orderBy", defaultValue = "nome") String orderBy,
            @RequestParam(value = "direction", defaultValue = "ASC") String direction){
        PageRequest pageRequest = PageRequest.of(page, linesPerPage, Direction.valueOf(direction), orderBy);
        Page<CompanyDTO> list = service.findAll(pageRequest);
        return ResponseEntity.ok().body(list);
    }

    @PostMapping
    public ResponseEntity<CompanyDTO> newCompany(@Valid @RequestBody CompanyDTO companyDTO){
        companyDTO = service.insert(companyDTO);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(companyDTO.getId()).toUri();
        return ResponseEntity.created(uri).body(companyDTO);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity <CompanyDTO> findById(@PathVariable String id){
        CompanyDTO dto = service.findById(id);
        return ResponseEntity.ok().body(dto);
    }


    @PutMapping(value = "/{id}")
    public ResponseEntity<CompanyDTO> update(@PathVariable String id , @Valid @RequestBody CompanyDTO dto){
        dto = service.update(id, dto);
        return ResponseEntity.ok().body(dto);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity <CompanyDTO> delete(@PathVariable String id){
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

}
