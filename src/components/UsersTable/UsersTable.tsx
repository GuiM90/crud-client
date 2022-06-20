import * as C from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { getUsers } from "../../services/getusers";
import { deleteUser } from "../../services/deleteUser";

interface User {
    id: number
    name: string
    email: string
}

interface Props {
    users: User[]
}

export const UsersTable = () => {
    const [allUsers, setAllUsers] = useState([]);

    const setUsersInTable = async () => {
        const users = await getUsers();
        setAllUsers(users);
    };

    useEffect(() => {
        setUsersInTable();
    }, []);

    const UserList = (props: Props) => {
        const { users } = props;
        const userList = users.map((user) =>
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                    <C.DeleteButton onClick={() => {
                        deleteUser(user.id);
                        return setUsersInTable();
                    }}><FontAwesomeIcon icon={faTrashCan} /></C.DeleteButton>
                    <C.EditButton><FontAwesomeIcon icon={faPencil} /></C.EditButton>
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
            <UserList users={allUsers}></UserList>
        </C.TableUsers>
    );
}