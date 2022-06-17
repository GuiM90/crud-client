import * as C from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface User {
    id: number
    name: string
    email: string
}

interface Props {
    users: User[]
}

export const Users = () => {
    const [allUsers, setAllUsers] = useState([]);
    const baseURL = "http://localhost:3001/user";
    
    const getUsers = async (): Promise<User[]> => {
        const response = await fetch(baseURL);
        const json = await response.json();
        setAllUsers(json);
        return json;
    };
    window.onload = getUsers;

    const deleteUser = async (userID: number) => {
        try {
            const serverReq: Response = await fetch(baseURL, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: userID
                }),
            });
            const response = await serverReq.json();
            if (response.status !== 200) throw new Error();
            getUsers();
        } catch(e) {
            console.log(e);
        };
    }

    const UserList = (props: Props) => {
        const { users } = props;
        const userList = users.map((user) =>
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                    <C.DeleteButton onClick={() => deleteUser(user.id)}><FontAwesomeIcon icon={faTrashCan} /></C.DeleteButton>
                    <C.EditButton><FontAwesomeIcon icon={faPencil} /></C.EditButton>
                </td>
            </tr>
        )
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