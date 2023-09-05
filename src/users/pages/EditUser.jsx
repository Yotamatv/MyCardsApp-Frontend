import React from "react";
import useUsers from "../hooks/useUsers";
import { Navigate, useNavigate } from "react-router-dom";
import { Container } from "@mui/material";
import UserForm from "../components/UserForm";
import signupSchema from "../models/joi-schema/signupSchema";
import initialEditForm from "../helpers/initialForms/initialEditForm";
import ROUTES from "../../routes/routesModel";
import useForm from "../../forms/hooks/useForm";
import { useUser } from "../providers/UserProvider";

export default function EditUser() {
  const { user } = useUser();
  const { handleEditUser } = useUsers();
  const navigate = useNavigate();
  const initForm = initialEditForm();
  const onSubmit = (data) => {
    handleEditUser(data);
    navigate(ROUTES.ROOT);
    navigate(0);
  };
  const { data, errors, ...rest } = useForm(initForm, signupSchema, onSubmit);

  if (!user || initForm === "") {
    return <Navigate replace to={ROUTES.ROOT} />;
  }
  return (
    <Container
      sx={{
        pt: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <UserForm
        onSubmit={rest.onSubmit}
        onReset={rest.onReset}
        validateForm={rest.validateForm}
        title={"Edit User"}
        errors={errors}
        data={data}
        onInputChange={rest.handleChange}
        setData={rest.setData}
      ></UserForm>
    </Container>
  );
}
