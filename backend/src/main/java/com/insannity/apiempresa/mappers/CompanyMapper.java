package com.insannity.apiempresa.mappers;

import com.insannity.apiempresa.dto.CompanyDTO;
import com.insannity.apiempresa.entities.Company;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface CompanyMapper {

    CompanyMapper INSTANCE = Mappers.getMapper(CompanyMapper.class);

    Company toModel(CompanyDTO companyDTO);

    CompanyDTO toDto(Company company);


}
