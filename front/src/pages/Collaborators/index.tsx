import {useCallback, useEffect, useState} from "react";
import TableRow from "./components/table-row";
import {makePrivateRequest, makeRequest} from "../../core/utils/request";
import Pagination from "react-js-pagination";
import {CollaboratorResponse} from "../../core/types/collaborator";
import {useLocation} from "react-router-dom";
import {toast} from "react-toastify";
import Breadcrumb from "../../core/components/breadcrumb";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}


const Collaborators = () => {
    const [collaboratorsResponse, setCollaboratorsResponse] = useState<CollaboratorResponse>();
    const [isLoading, setIsLoading] = useState(false);
    const [activePage, setActivePage] = useState(1);
    const query = useQuery();
    const companyId = query.get("company") || "";


    const getCollaborators = useCallback(() => {
        const params ={
            page:activePage-1,
            linesPerPage: 10,
            orderBy: "id",
            companyId,
        }
        setIsLoading(true);
        makePrivateRequest({url:'/collaborators', params})
            .then(response => setCollaboratorsResponse(response.data))
            .finally(()=> {setIsLoading(false)});
    }, [activePage, companyId]);

    useEffect(()=>{
        getCollaborators();
    }, [getCollaborators, companyId] );

    const onRemove = (collaboratorId:any) =>{
        if(collaboratorId !== undefined){
            const confirm = window.confirm('Deseja realmente apagar o colaborador?');
            if(confirm){
                makeRequest({ url:`/collaborators/${collaboratorId}`, method:'DELETE' })
                    .then(() => {
                        toast.success('Colaborador apagada com sucesso!');
                        getCollaborators();
                    })
                    .catch(() =>{
                        toast.error('Erro ao apagar Colaborador!');
                    });
            }
        }else {
            toast.error('Ocorreu um erro, tente novamente mais tarde!');
        }
    }


    return(
        <>
            <Breadcrumb controller="Colaboradores" action="List" />
            <div className="p-5 rounded bg-white">
                <table className="table table-striped">
                    {isLoading && ("Loading")}
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Empresa</th>
                        <th scope="col">Nome</th>
                        <th scope="col">CPF</th>
                        <th scope="col">Telefone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Endereço</th>
                        <th scope="col">Ações</th>
                    </tr>
                    </thead>
                    <tbody>
                    {collaboratorsResponse?.content.map(collaborator =>
                        <TableRow collaborator={collaborator} key={collaborator.id} onRemove={onRemove}/>
                    )}
                    </tbody>
                </table>
                {collaboratorsResponse &&
                    <nav aria-label="...">
                        <Pagination
                            activePage={activePage}
                            itemsCountPerPage={10}
                            totalItemsCount={collaboratorsResponse.totalElements}
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
        </>
    )
}

export default Collaborators;