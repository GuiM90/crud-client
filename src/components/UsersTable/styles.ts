import styled from "styled-components";

export const TableUsers = styled.table`
    text-align: left;
    margin-top: 40px;

    th,td{
        border-bottom: 1px solid #9999;
        padding: 10px;
    }

    caption {
        font-weight: bold;
        margin-bottom: 10px;
    }

    button{
        border: none;
        cursor: pointer;
        color: #fff;
        padding: 10px 20px;
        border-radius: 10px;
        font-size: 1rem;
        box-shadow: 1px 5px 10px 0px #333;
        transition: all .3s ease;
    }
`;

export const DeleteButton = styled.button`
    background: #ff7979;
    margin-right: 12px;

    &:hover{
        background: #eb4d4b;
    }
`;

export const EditButton = styled.button`
    background: #f6e58d;

    &:hover{
        background: #f9ca24;
    }
`;