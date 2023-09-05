import React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import useCards from "../hooks/useCards";
import useForm from "../../forms/hooks/useForm";
import { Container } from "@mui/material";
import CardForm from "../components/card/CardForm";
import editCardSchema from "../models/joi-schema/editCardSchema";
import { useCardsFormProvider } from "../providers/CardsFormProvider";
import Spinner from "../../components/Spinner";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../../users/providers/UserProvider";

export default function EditCard() {
  const { id } = useParams();
  const { user } = useUser();
  const { handleUpdateCard } = useCards();
  const navigate = useNavigate();
  const updateCard = (data) => {
    handleUpdateCard(id, data);

    navigate(ROUTES.ROOT);
  };
  const initForm = useCardsFormProvider().filter((card) => card.id === id)[0];
  const { data, errors, ...rest } = useForm(
    initForm,
    editCardSchema,
    updateCard
  );
  if (!user) {
    return <Navigate replace to={ROUTES.ROOT} />;
  }
  return (
    <Container>
      {!initForm ? (
        <Spinner />
      ) : (
        <CardForm
          onSubmit={rest.onSubmit}
          onReset={rest.handleReset}
          validateForm={rest.validateForm}
          title={"Edit Card"}
          errors={errors}
          data={data}
          onInputChange={rest.handleChange}
          setData={rest.setData}
        ></CardForm>
      )}
    </Container>
  );
}
