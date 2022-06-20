import * as C from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useEffect, Dispatch, SetStateAction } from "react";
import { getUsers } from "../../services/getusers";
import { deleteUser } from "../../services/deleteUser";

interface User {
    id: number
    name: string
    email: string
}

interface PropsUsersList {
    users: User[]
}

interface PropsTable{
    users: User[]
    renderUsers: Dispatch<SetStateAction<never[]>>
}

export const UsersTable = (props: PropsTable) => {
    const { users, renderUsers } = props;

    const setUsersInTable = async () => {
        const users = await getUsers();
        renderUsers(users);
    };

    useEffect(() => {
        setUsersInTable();
    }, []);

    const removeUser = async (userID: number) => {
        await deleteUser(userID);
        return setUsersInTable();
    };

    const UserList = (props: PropsUsersList) => {
        const { users } = props;
        const userList = users.map((user) =>
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                    <C.DeleteButton onClick={() => removeUser(user.id)}><FontAwesomeIcon icon={faTrashCan} />
                    </C.DeleteButton>
                    <C.EditButton><FontAwesomeIcon icon={faPencil} />
                    </C.EditButton>
                </td>
            </tr>
        );
        return (
            <tbody>{userList}</tbody>
        );
    };

    return (
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
            <UserList users={users}></UserList>
        </C.TableUsers>
    );
}