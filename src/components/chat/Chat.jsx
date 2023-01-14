import { Dialog } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const Chat = () => {
  const account = useSelector((state) => state.account.accountState);
  return (
    <Dialog open={true}>
      <h1>this is chat dialogue</h1>
    </Dialog>
  );
};

export default Chat;
