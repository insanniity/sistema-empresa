import {useHistory} from "react-router-dom";
import {User} from "../../../core/types/user";

type Props = {
    user: User;
    onRemove: (id:any) => void;
}

const TableRow = ({user, onRemove}:Props) => {
    const history = useHistory();

    const handleEdit = () => {
        history.push(`/users/${user.id}`);
    }

    return(
        <tr>
            <th scope="row">{user.id}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
                <button type="button" onClick={() => handleEdit()} className="btn btn-primary"><i className="bi-pencil"></i></button>
                <button type="button" onClick={() =>onRemove(user.id)} className="btn btn-danger ms-1"><i className="bi-trash"></i></button>
            </td>
        </tr>
    )
}

export default TableRow;