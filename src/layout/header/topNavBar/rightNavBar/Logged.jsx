import { Box, IconButton } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import React from "react";
import useUsers from "../../../../users/hooks/useUsers";
import MyAppBar from "./MyAppBar";

export default function Logged() {
  const { handleLogout } = useUsers();
  return (
    <Box>
      <Box sx={{ p: 0, display: "inline-flex" }}>
        <MyAppBar />
      </Box>
      <IconButton
        sx={{ p: 0, display: "inline-flex", marginLeft: 2 }}
        onClick={handleLogout}
      >
        <LogoutIcon />
      </IconButton>
    </Box>
  );
}
