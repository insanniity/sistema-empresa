import { Link } from "react-router-dom";
import {Company} from "../../../core/types/company";

type Props = {
    company: Company;
}

const TableRow = ({company}:Props) => {
    return(
        <tr>
            <th scope="row">{company.id}</th>
            <td>{company.nome}</td>
            <td>{company.cnpj}</td>
            <td>{company.telefone}</td>
            <td>{company.email}</td>
            <td>{company.endereco}</td>
            <td>
                <Link to={`/companies/${company.id}`}><button type="button" className="btn btn-primary"><i className="bi-pencil"></i></button></Link>
                <span> </span>
                <button type="button" className="btn btn-warning"><i className="bi-eye"></i></button>
                <span> </span>
                <button type="button" className="btn btn-danger"><i className="bi-trash"></i></button>
            </td>
        </tr>
    )
}

export default TableRow;