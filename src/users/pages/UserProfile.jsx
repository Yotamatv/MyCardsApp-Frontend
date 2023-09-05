import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../providers/UserProvider";
import initialEditForm from "../helpers/initialForms/initialEditForm";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useUserApi } from "../providers/UserApiProvider";

export default function UserProfile() {
  const { user } = useUser();
  const initForm = initialEditForm();

  const navigate = useNavigate();
  const userApi = useUserApi();
  if (!user || initForm === "") {
    return <Navigate replace to={ROUTES.ROOT} />;
  }
  return (
    <Container marginleft={5}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box>
            <Typography
              variant="h1"
              component="h2"
              color="primary"
              textTransform={"uppercase"}
              fontWeight={550}
            >
              {userApi.name.first}
              {""}
            </Typography>
            <br />
            <br />
            <Typography
              variant="h3"
              component="h3"
              textTransform={"uppercase"}
              color="primary"
              fontWeight={450}
            >
              {userApi.name.middle}
              {""}
              {userApi.name.last}
            </Typography>
            <br />
            <br />

            <Typography variant="body2" color="primary" fontSize={24}>
              <strong>Phone:</strong> {userApi.phone}
            </Typography>
            <br />
            <br />
            <Typography variant="body2" color="primary" fontSize={24}>
              <strong>Email:</strong> {userApi.email}
            </Typography>
            <br />
            <br />

            <Typography variant="body2" color="primary" fontSize={24}>
              <strong>Address:</strong> {userApi.address.street}{" "}
              {userApi.address.houseNumber} {userApi.address.city}{" "}
              {userApi.address.zip}
            </Typography>
            <br />
            <br />
            {user.isAdmin ? (
              <>
                <Typography variant="body2" color="primary" fontSize={24}>
                  <strong>User is Admin</strong>
                </Typography>
                <br />
                <br />
              </>
            ) : (
              <>
                <Typography variant="body2" color="primary" fontSize={24}>
                  <strong>User is not an Admin</strong>
                </Typography>
                <br />
                <br />
              </>
            )}
            {user.isBusiness ? (
              <>
                <Typography variant="body2" color="primary" fontSize={24}>
                  <strong>Business User</strong>
                </Typography>
                <br />
                <br />
              </>
            ) : (
              <>
                <Typography variant="body2" color="primary" fontSize={24}>
                  <strong>Not a Business User</strong>
                </Typography>
                <br />
                <br />
              </>
            )}
            <Button
              onClick={() => navigate(ROUTES.EDIT_USER)}
              color="success"
              size="large"
            >
              Click Here To Edit Your User
            </Button>
          </Box>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </Container>
  );
}
