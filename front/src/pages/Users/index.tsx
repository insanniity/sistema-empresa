import {useCallback, useEffect, useState} from "react";
import {makePrivateRequest} from "../../core/utils/request";
import {toast} from "react-toastify";
import Pagination from "react-js-pagination";
import {UserResponse} from "../../core/types/user";
import TableRow from "./components/table-row";
import {getSessionData} from "../../core/auth/auth";
import {useHistory} from "react-router-dom";
import Breadcrumb from "../../core/components/breadcrumb";
import MyLoader from "../../core/components/contentLoader";


const Users = () => {
    const [usersResponse, setUsersResponse] = useState<UserResponse>();
    const [isLoading, setIsLoading] = useState(false);
    const [activePage, setActivePage] = useState(1);
    const [currentUser, setCurrentUser] = useState(0);

    const history = useHistory();

    const getUsers = useCallback(() => {
        const params ={
            page:activePage-1,
            linesPerPage: 10,
            orderBy: "id",
        }
        setIsLoading(true);
        makePrivateRequest({url:'/users', params})
            .then(response => setUsersResponse(response.data))
            .finally(()=> {setIsLoading(false)});
    }, [activePage]);

    useEffect(()=>{
        getUsers();
    }, [getUsers] );

    useEffect(() => {
        const sessionData = getSessionData();
        setCurrentUser(sessionData.userId);
    }, [getUsers, history]);


    const onRemove = (id:any) =>{
        console.log(currentUser)
        if(id === currentUser){
            toast.error('Você não pode apagar o usuário logado no momento!');
        }else {
            if (id !== undefined) {
                const confirm = window.confirm('Deseja realmente apagar a usuario?');
                if (confirm) {
                    makePrivateRequest({url: `/users/${id}`, method: 'DELETE'})
                        .then(() => {
                            toast.success('Usuario apagada com sucesso!');
                            getUsers();
                        })
                        .catch(() => {
                            toast.error('Erro ao apagar Usuario!');
                        });
                }
            } else {
                toast.error('Ocorreu um erro, tente novamente mais tarde!');
            }
        }
    }

    return(
        <>
            <Breadcrumb controller="User" action="List" />
            <div className="p-5 rounded bg-white">
                {isLoading ? <MyLoader/> : (
                    <>
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Email</th>
                                <th scope="col">Ações</th>
                            </tr>
                            </thead>
                            <tbody>
                            {usersResponse?.content.map(user =>
                                <TableRow user={user} key={user.id} onRemove={onRemove}/>
                            )}
                            </tbody>
                        </table>
                        {usersResponse &&
                        <nav aria-label="...">
                            <Pagination
                                activePage={activePage}
                                itemsCountPerPage={10}
                                totalItemsCount={usersResponse.totalElements}
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
                    </>
                )}
            </div>
        </>
    )
}

export default Users;