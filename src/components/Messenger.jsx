import React from "react";
import LoginDialogue from "./account/LoginDialogue";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material";

const Header = styled(AppBar)`
  height: 200px;
  background-color: #00a884;
  box-shadow: none;
`;

const Messenger = () => {
  return (
    <div>
      <Header>
        <Toolbar></Toolbar>
      </Header>
      <LoginDialogue />
    </div>
  );
};

export default Messenger;
