import {useCallback, useEffect, useState} from "react";
import TableRow from "./components/table-row";
import {CompanyResponse} from "../../core/types/company";
import {makeRequest} from "../../core/utils/request";
import Pagination from "react-js-pagination";

const Companies = () => {
    const [companiesResponse, setCompaniesResponse] = useState<CompanyResponse>();
    const [isLoading, setIsLoading] = useState(false);
    const [activePage, setActivePage] = useState(1);


    const getCompanies = useCallback(() => {
        const params ={
            page:activePage-1,
            linesPerPage: 10,
            orderBy: "id",
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
                {isLoading && ("Loading")}
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
                    <TableRow company={company} key={company.id} />
                )}
                </tbody>
            </table>
            {companiesResponse &&
                <nav aria-label="...">
                    <Pagination
                        activePage={activePage}
                        itemsCountPerPage={10}
                        totalItemsCount={companiesResponse.totalElements}
                        pageRangeDisplayed={5}
                        onChange={page => setActivePage(page)}
                        itemClass="page-item"
                        linkClass="page-link mx-1"
                        activeClass="active"
                        innerClass="pagination justify-content-center"
                        hideDisabled={false}
                    />
                </nav>
            }
        </div>
    )
}

export default Companies;