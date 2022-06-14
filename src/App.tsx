import React, { Fragment } from "react";
import { UserForm } from "./components/UserForm/UserForm";
import { GlobalStyle } from "./global";

function App() {
  return (
    <Fragment>
      <GlobalStyle/>
      <UserForm/>
    </Fragment>
  );
}

export default App;