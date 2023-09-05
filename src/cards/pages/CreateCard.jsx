import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import useCards from "../hooks/useCards";
import editCardSchema from "../models/joi-schema/editCardSchema";
import useForm from "../../forms/hooks/useForm";
import ROUTES from "../../routes/routesModel";
import { Container } from "@mui/material";
import Spinner from "../../components/Spinner";
import CardForm from "../components/card/CardForm";
import { useUser } from "../../users/providers/UserProvider";
import normalizeCard from "../models/joi-schema/normalizeCard";
import { initialCreateCard } from "../initialForms/initialCreateCard";

export default function CreateCard() {
  const { handleCreateCard } = useCards();
  const { user } = useUser();
  const navigate = useNavigate();
  const createCard = (data) => {
    handleCreateCard(normalizeCard(data));
    navigate(ROUTES.ROOT);
  };

  if (!user) {
    return <Navigate replace to={ROUTES.ROOT} />;
  }
  const initForm = initialCreateCard(user);
  const { data, errors, ...rest } = useForm(
    initForm,
    editCardSchema,
    createCard
  );

  return (
    <Container>
      {!initForm ? (
        <Spinner />
      ) : (
        <CardForm
          onSubmit={rest.onSubmit}
          onReset={rest.handleReset}
          validateForm={rest.validateForm}
          title={"Create Card"}
          errors={errors}
          data={data}
          onInputChange={rest.handleChange}
          setData={rest.setData}
        ></CardForm>
      )}
    </Container>
  );
}
