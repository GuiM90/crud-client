import * as C from "./styles";
import React, { Dispatch, SetStateAction } from "react";
import { saveUser } from "../../services/saveUser";
import { updateUser } from "../../services/updateUser";
import swal from "sweetalert";

interface Props {
    setUsers: () => void
    inputNameValue: string
    inputEmailValue: string
    changeInputNameValue: Dispatch<SetStateAction<string>>
    changeInputEmailValue: Dispatch<SetStateAction<string>>
    userID: number
    isPost: boolean
    changeIsPost: Dispatch<SetStateAction<boolean>>
}

export const UserForm = (props: Props) => {
    const { setUsers,
        inputNameValue,
        changeInputEmailValue,
        inputEmailValue,
        changeInputNameValue,
        userID,
        isPost,
        changeIsPost,
    } = props;

    const inputClear = () => {
        changeInputNameValue("");
        changeInputEmailValue("");
        changeIsPost(true);
    };

    const sendRegister = async () => {
        if (inputNameValue == "" || inputEmailValue == "") {
            swal({
                title: "Erro",
                text: "Preencha todos os campos",
                icon: "error",
            });
        } else {
            const response = await saveUser(inputNameValue, inputEmailValue);
            if (response.error.errno == 1062) {
                swal({
                    title: "Erro",
                    text: "Email já cadastrado!",
                    icon: "error",
                });
            } else {
                setUsers();
                inputClear();
            };
        };
    };

    const editUser = async () => {
        await updateUser(inputNameValue, inputEmailValue, userID);
        setUsers();
        inputClear();
        changeIsPost(true);
    }

    const buttonMethod = isPost ? sendRegister : editUser;

    return (
        <>
            <C.InputWrapper>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input type="text"
                        placeholder="Digite o nome..."
                        value={inputNameValue}
                        name="name"
                        onChange={e => changeInputNameValue(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input type="text"
                        placeholder="Digite o email... "
                        value={inputEmailValue}
                        name="email"
                        onChange={e => changeInputEmailValue(e.target.value)} />
                </div>
            </C.InputWrapper>

            <C.ButtonWrapper>
                <C.SaveButton onClick={buttonMethod}>Salvar</C.SaveButton>
                <C.CancelButton onClick={inputClear}>Cancelar</C.CancelButton>
            </C.ButtonWrapper>
        </>
    );
}