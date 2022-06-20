import * as C from "./styles";
import React, { useState } from "react";
import { saveUser } from "../../services/saveUser";

interface Props {
    setUsers: () => void
}

export const UserForm = (props: Props) => {
    const { setUsers } = props;

    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");

    const inputClear = () => {
        setUserEmail("");
        setUserName("");
    };

    const sendRegister = async () => {
        await saveUser(userName, userEmail);
        setUsers();
        inputClear();
    };

    return (
        <>
            <C.InputWrapper>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input type="text"
                        placeholder="Digite o nome..."
                        value={userName}
                        name="name"
                        onChange={e => setUserName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input type="text"
                        placeholder="Digite o email... "
                        value={userEmail}
                        name="email"
                        onChange={e => setUserEmail(e.target.value)} />
                </div>
            </C.InputWrapper>

            <C.ButtonWrapper>
                <C.SaveButton onClick={sendRegister}>Salvar</C.SaveButton>
                <C.CancelButton onClick={inputClear}>Cancelar</C.CancelButton>
            </C.ButtonWrapper>
        </>
    );
}