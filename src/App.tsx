import React, { useState } from "react";
import { GlobalStyle } from "./assets/style/global";
import { UserForm } from "./components/UserForm/UserForm";
import { UsersTable } from "./components/UsersTable/UsersTable";
import { getUsers } from "./services/getUsers";
import styled from "styled-components";

function App() {
  const [allUsers, setAllUsers] = useState([]);

  const setUsersInTable = async () => {
    const users = await getUsers();
    setAllUsers(users);
  };

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userID, setUserID] = useState(0);

  const [isPost, setIsPost] = useState(true);

  return (
    <>
      <GlobalStyle />
      <Container>
        <FormWrapper>
          <UserForm
            setUsers={setUsersInTable}
            inputNameValue={userName}
            changeInputNameValue={setUserName}
            inputEmailValue={userEmail}
            changeInputEmailValue={setUserEmail}
            userID={userID}
            isPost={isPost}
            changeIsPost={setIsPost}
          />
          <UsersTable
            users={allUsers}
            renderUsers={setAllUsers}
            changeInputNameValue={setUserName}
            changeInputEmailValue={setUserEmail}
            userID={userID}
            changeUserID={setUserID}
            changeIsPost={setIsPost}
          />
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