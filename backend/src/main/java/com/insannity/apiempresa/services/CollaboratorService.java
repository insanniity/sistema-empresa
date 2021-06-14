package com.insannity.apiempresa.services;

import com.insannity.apiempresa.repositories.CollaboratorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CollaboratorService {

    @Autowired
    private CollaboratorRepository repository;


}
