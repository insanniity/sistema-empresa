package com.insannity.apiempresa.controllers;


import com.insannity.apiempresa.dto.CompanyDTO;
import com.insannity.apiempresa.services.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/companies")
public class CompanyController {

    @Autowired
    private CompanyService service;

    @GetMapping
    public ResponseEntity<List<CompanyDTO>> findAll(){
        List<CompanyDTO> list = service.findAll();
        return ResponseEntity.ok().body(list);
    }

    @PostMapping
    public ResponseEntity<CompanyDTO> newCompany(@RequestBody CompanyDTO companyDTO){
        companyDTO = service.insert(companyDTO);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(companyDTO.getId()).toUri();
        return ResponseEntity.created(uri).body(companyDTO);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity <CompanyDTO> findById(@PathVariable Long id){
        CompanyDTO dto = service.findById(id);
        return ResponseEntity.ok().body(dto);
    }


    @PutMapping(value = "/{id}")
    public ResponseEntity <CompanyDTO> update(@PathVariable Long id , @RequestBody CompanyDTO dto){
        dto = service.update(id, dto);
        return ResponseEntity.ok().body(dto);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity <CompanyDTO> delete(@PathVariable Long id){
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

}
