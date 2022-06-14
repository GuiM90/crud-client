import * as C from "./styles" ;
import { Users } from "../UsersTable/Users";

export const UserForm = () => {
    return(
    <C.Container>

        <C.FormWrapper>

        <C.InputWrapper>
            <div>
                <label htmlFor="name">Nome</label>
                <input type="text" placeholder="Digite o nome..." name="name" id="" />
            </div>
            <div>
                <label htmlFor="email">E-mail</label>
                <input type="text" placeholder="Digite o email... " name="email" id="" />
            </div>
        </C.InputWrapper>

        <C.ButtonWrapper>
            <C.SaveButton>Salvar</C.SaveButton>
            <C.CancelButton>Cancelar</C.CancelButton>
        </C.ButtonWrapper>

        <C.TableWrapper>
            <Users/>
        </C.TableWrapper>

        </C.FormWrapper>
    </C.Container>
    );
}