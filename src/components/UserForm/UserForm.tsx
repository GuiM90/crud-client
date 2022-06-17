import * as C from "./styles" ;
import { Users } from "../UsersTable/Users";
import React, { useState } from "react";

export const UserForm = () => {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const baseURL = "http://localhost:3001/user";

    const saveUser = async () => {
        try {
            const serverReq: Response = await fetch(baseURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: userName,
                    email: userEmail,
                }),
            });
            const response = await serverReq.json();
            if (response.status !== 200) throw new Error();
            inputClear();
        } catch(e) {
            console.log(e);
        };
    };

    const inputClear = () => {
        setUserEmail("");
        setUserName("");
    };

    return(
    <C.Container>

        <C.FormWrapper>

        <C.InputWrapper>
            <div>
                <label htmlFor="name">Nome</label>
                <input type="text"
                 placeholder="Digite o nome..." 
                 value={userName}
                 name="name"
                 onChange={e => setUserName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="email">E-mail</label>
                <input type="text"
                 placeholder="Digite o email... "
                 value={userEmail}
                  name="email"
                  onChange={e => setUserEmail(e.target.value)}/>
            </div>
        </C.InputWrapper>

        <C.ButtonWrapper>
            <C.SaveButton onClick={saveUser}>Salvar</C.SaveButton>
            <C.CancelButton onClick={inputClear}>Cancelar</C.CancelButton>
        </C.ButtonWrapper>

        <C.TableWrapper>
            <Users/>
        </C.TableWrapper>

        </C.FormWrapper>
    </C.Container>
    );
}