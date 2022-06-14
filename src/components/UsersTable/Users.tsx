import * as C from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons";

export const Users = () => {
    return(
    <C.TableUsers>
        <caption>Usuários</caption>
        <thead>
            <tr>
                <th>id</th>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
        <tr>
                <td>1</td>
                <td>Joao</td>
                <td>email@sddh.com</td>
                <td>
                <C.DeleteButton><FontAwesomeIcon icon={faTrashCan}/></C.DeleteButton>
                    <C.EditButton><FontAwesomeIcon icon={faPencil}/></C.EditButton>
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td>Pedro</td>
                <td>email2@sddh.com</td>
                <td>
                    <C.DeleteButton><FontAwesomeIcon icon={faTrashCan}/></C.DeleteButton>
                    <C.EditButton><FontAwesomeIcon icon={faPencil}/></C.EditButton>
                </td>
            </tr>
        </tbody>
    </C.TableUsers>
    );
}