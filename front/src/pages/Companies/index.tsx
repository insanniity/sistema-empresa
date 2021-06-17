import {useCallback, useEffect, useState} from "react";
import TableRow from "./components/table-row";
import {CompanyResponse} from "../../core/types/company";
import {makeRequest} from "../../core/utils/request";

const Companies = () => {
    const [companiesResponse, setCompaniesResponse] = useState<CompanyResponse>();
    const [isLoading, setIsLoading] = useState(false);
    const [activePage, setActivePage] = useState(0);


    const getCompanies = useCallback(() => {
        const params ={
            page:activePage,
            linesPerPage: 10,
        }
        setIsLoading(true);
        makeRequest({url:'/companies', params})
            .then(response => setCompaniesResponse(response.data))
            .finally(()=> {setIsLoading(false)});
    }, [activePage]);

    useEffect(()=>{
        getCompanies();
    }, [getCompanies] );

    return(
        <div className="p-5 rounded bg-white">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">CNPJ</th>
                        <th scope="col">Telefone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Endereço</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {companiesResponse?.content.map(company =>
                        <TableRow company={company}/>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Companies;