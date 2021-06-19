import {useHistory} from "react-router-dom";
import {Collaborator} from "../../../core/types/collaborator";

type Props = {
    collaborator: Collaborator;
    onRemove: (collaboratorId:any) => void;
}

const TableRow = ({collaborator, onRemove}:Props) => {
    const history = useHistory();

    const handleEdit = () => {
        history.push(`/collaborators/${collaborator.id}`);
    }


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
                <button type="button" onClick={handleEdit} className="btn btn-primary"><i className="bi-pencil"></i></button>
                <button type="button" onClick={() =>onRemove(collaborator.id)} className="btn btn-danger ms-1"><i className="bi-trash"></i></button>
            </td>
        </tr>
    )
}

export default TableRow;