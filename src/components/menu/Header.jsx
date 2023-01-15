import { Box, styled } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const account = useSelector((state) => state.account.accountState);
  return (
    <Box
      sx={{
        height: "44px",
        background: "#ededed",
        paddingX: "8px",
        paddngY: "16px",
      }}
    >
      <img
        src={account.picture}
        alt="dp"
        style={{ height: "40px", width: "40px", borderRadius: "50%" }}
      />
    </Box>
  );
};

export default Header;
