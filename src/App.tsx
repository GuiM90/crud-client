import React, { useState } from "react";
import { GlobalStyle } from "./global";
import { UserForm } from "./components/UserForm/UserForm";
import { UsersTable } from "./components/UsersTable/UsersTable";
import { getUsers } from "./services/getusers";
import styled from "styled-components";

function App() {
  const [allUsers, setAllUsers] = useState([]);

  const setUsersInTable = async () => {
    const users = await getUsers();
    setAllUsers(users);
};

  return (
    <>
      <GlobalStyle />
      <Container>
        <FormWrapper>
          <UserForm
           setUsers={setUsersInTable}/>
          <UsersTable
           users={allUsers}
           renderUsers={setAllUsers}/>
        </FormWrapper>
      </Container>
    </>
  );
}

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FormWrapper = styled.div`  
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default App;