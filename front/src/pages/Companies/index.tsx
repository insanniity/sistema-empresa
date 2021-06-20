import {useCallback, useEffect, useState} from "react";
import TableRow from "./components/table-row";
import {CompanyResponse} from "../../core/types/company";
import {makePrivateRequest} from "../../core/utils/request";
import Pagination from "react-js-pagination";
import {toast} from "react-toastify";

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
        makePrivateRequest({url:'/companies', params})
            .then(response => setCompaniesResponse(response.data))
            .finally(()=> {setIsLoading(false)});
    }, [activePage]);

    useEffect(()=>{
        getCompanies();
    }, [getCompanies] );


    const onRemove = (companyId:any) =>{
        if(companyId !== undefined){
            const confirm = window.confirm('Deseja realmente apagar a empresa?');
            if(confirm){
                makePrivateRequest({ url:`/companies/${companyId}`, method:'DELETE' })
                    .then(() => {
                        toast.success('Empresa apagada com sucesso!');
                        getCompanies();
                    })
                    .catch(() =>{
                        toast.error('Erro ao apagar empresa! Tente apagar todos os colabores dela antes.');
                    });
            }
        }else {
            toast.error('Ocorreu um erro, tente novamente mais tarde!');
        }
    }

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
                    <TableRow company={company} key={company.id} onRemove={onRemove}/>
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