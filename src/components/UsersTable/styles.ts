import styled from "styled-components";

export const TableUsers = styled.table`
    text-align: left;

    th,td{
        border-bottom: 1px solid #9999;
        padding: 10px 30px;
    }

    caption {
        font-weight: bold;
        margin-bottom: 10px;
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