import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import Favorite from "@mui/icons-material/Favorite";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { getUser } from "../../users/services/localStorageService";

export default function Footer() {
  const navigate = useNavigate();
  const user = getUser();
  return (
    <Paper
      sx={{ position: "sticky", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation showLabels>
        <BottomNavigationAction
          label="About"
          icon={<InfoIcon />}
          onClick={() => navigate(ROUTES.ABOUT)}
        />
        {user && (
          <BottomNavigationAction
            label="Favorites"
            icon={<Favorite />}
            onClick={() => navigate(ROUTES.FAV_CARDS)}
          />
        )}
        {user && (
          <BottomNavigationAction
            label="My Cards"
            icon={<PermContactCalendarOutlinedIcon />}
            onClick={() => navigate(ROUTES.MY_CARDS)}
          />
        )}
      </BottomNavigation>
    </Paper>
  );
}
