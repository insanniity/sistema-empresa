import {useHistory} from "react-router-dom";
import {Company} from "../../../core/types/company";

type Props = {
    company: Company;
    onRemove: (companyId:any) => void;
}

const TableRow = ({company, onRemove}:Props) => {
    const history = useHistory();

    const handleCollaborators = () => {
        history.push(`/collaborators?company=${company.id}`);
    }

    const handleEdit = () => {
        history.push(`/companies/${company.id}`);
    }

    return(
        <tr>
            <th scope="row">{company.id}</th>
            <td>{company.nome}</td>
            <td>{company.cnpj}</td>
            <td>{company.telefone}</td>
            <td>{company.email}</td>
            <td>{company.endereco}</td>
            <td>
                <button type="button" onClick={() => handleEdit()} className="btn btn-primary"><i className="bi-pencil"></i></button>
                <button type="button" onClick={() => handleCollaborators()} className="btn btn-warning ms-1"><i className="bi-people"></i></button>
                <button type="button" onClick={() =>onRemove(company.id)} className="btn btn-danger ms-1"><i className="bi-trash"></i></button>
            </td>
        </tr>
    )
}

export default TableRow;