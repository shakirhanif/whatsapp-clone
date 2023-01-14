import React from "react";
import Dialog from "@mui/material/Dialog";
import { Box, List, ListItem, styled, Typography } from "@mui/material";
import qr from "../../assets/images/qr.jpg";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { accountActions } from "../../redux/account-actions";
const Container = styled(Box)`
  padding: 56px;
`;

const LoginDialogue = () => {
  const account = useSelector((state) => state.account.accountState);
  const dispatch = useDispatch();
  const reduxFunction = () => {
    dispatch(accountActions.setAccount("payload is working too"));
  };
  return (
    <Dialog
      open={true}
      hideBackdrop
      PaperProps={{
        sx: {
          height: "96%",
          width: "60%",
          marginTop: "12%",
          maxHeight: "100%",
          maxWidth: "100%",
          overflow: "none",
        },
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Container sx={{ color: "#525252", fontWeight: "300" }}>
          <Typography variant="h5" sx={{ marginBottom: "1rem" }}>
            To use WhatsUpp on your computer:
          </Typography>
          <List sx={{ fontWeight: "400" }}>
            <ListItem>1. Open WhatsUpp on your phone</ListItem>
            <ListItem>2. Tap Menu or Settings</ListItem>
            <ListItem>3. Link a Device</ListItem>
            <ListItem>
              4. Point your phone to this screen to capture the code
            </ListItem>
          </List>
        </Container>
        <Container>
          <img src={qr} alt="/" className="h-[256px] w-[256px]" />
          <GoogleLogin
            onSuccess={(res) => {
              const decoded = jwtDecode(res.credential);
              console.log(decoded);
            }}
            onError={(res) => {
              console.log("Login Failed", res);
            }}
          />
          <button onClick={reduxFunction}>clickME</button>
          <h1>{account}</h1>
        </Container>
      </Box>
    </Dialog>
  );
};

export default LoginDialogue;
