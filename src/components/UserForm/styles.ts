import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FormWrapper = styled.div`  
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const InputWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;

    input {
        outline: none;
        border: none;
        font-size: 1.2rem;
        background: transparent;
        padding: 12px;
        border-radius: 10px;
        box-shadow: 1px 5px 15px 1px #333;
    }

    label{
        display: block;
        font-size: 1.2rem;
        margin-bottom: 5px;
    }
`;

export const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 40px;

    button{
        border: none;
        cursor: pointer;
        color: #fff;
        padding: 10px 20px;
        border-radius: 10px;
        font-size: 1.2rem;
        box-shadow: 1px 5px 10px 0px #333;
        transition: all .3s ease;
    }
`;

export const TableWrapper = styled(ButtonWrapper)``;

export const SaveButton = styled.button`
    background: #00a8ff;

    &:hover{
        background: #0489e6;
    }
`;

export const CancelButton = styled.button`
    background: #485460;

    &:hover{
        background: #2f3640;
    }
`;