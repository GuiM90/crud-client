import * as C from "./styles";
import { UsersTable } from "../UsersTable/UsersTable";
import React, { useState } from "react";
import { saveUser } from "../../services/saveUser";

export const UserForm = () => {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");

    const inputClear = () => {
        setUserEmail("");
        setUserName("");
    };

    const sendRegister = async () => {
        await saveUser(userName, userEmail);
        inputClear();
    };

    return (
        <C.Container>

            <C.FormWrapper>

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

                <C.TableWrapper>
                    <UsersTable />
                </C.TableWrapper>

            </C.FormWrapper>
        </C.Container>
    );
}