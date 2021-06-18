import {Link} from "react-router-dom";
import {Collaborator} from "../../../core/types/collaborator";

type Props = {
    collaborator: Collaborator;
}

const TableRow = ({collaborator}:Props) => {
    return(
        <tr>
            <th scope="row">{collaborator.id}</th>
            <td>{collaborator.companyId}</td>
            <td>{collaborator.nome}</td>
            <td>{collaborator.cpf}</td>
            <td>{collaborator.telefone}</td>
            <td>{collaborator.email}</td>
            <td>{collaborator.endereco}</td>
            <td>
                <Link to={`/collaborators/${collaborator.id}`}><button type="button" className="btn btn-primary"><i className="bi-pencil"></i></button></Link>
                <button type="button" className="btn btn-danger ms-1"><i className="bi-trash"></i></button>
            </td>
        </tr>
    )
}

export default TableRow;