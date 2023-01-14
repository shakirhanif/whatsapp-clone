import React from "react";
import Dialog from "@mui/material/Dialog";
import { Box, List, ListItem, styled, Typography } from "@mui/material";
import qr from "../../assets/images/qr.jpg";
const Container = styled(Box)`
  padding: 56px;
`;
const LoginDialogue = () => {
  return (
    <Dialog
      open={true}
      PaperProps={{
        sx: {
          height: "96%",
          width: "60%",
          marginTop: "12%",
          maxHeight: "100%",
          maxWidth: "100%",
          boxShadow: "none",
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
        </Container>
      </Box>
    </Dialog>
  );
};

export default LoginDialogue;
