import { Container } from "@mui/material";
import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import useCards from "../hooks/useCards";
import CardsFeedback from "../components/CardsFeedback";
import { Navigate } from "react-router-dom";
import { useUser } from "../../users/providers/UserProvider";
import ROUTES from "../../routes/routesModel";

export default function FavCardsPage() {
  const {
    cards,
    isLoading,
    error,
    handleGetFavCards,
    handleDeleteCard,
    handleLikeCard,
  } = useCards();
  const { user } = useUser();
  if (!user) {
    return <Navigate replace to={ROUTES.ROOT} />;
  }
  useEffect(() => {
    handleGetFavCards();
  }, []);
  const handleDelete = async (id) => {
    await handleDeleteCard(id);
    handleGetFavCards();
  };
  const handleLike = async (id) => {
    await handleLikeCard(id);
    handleGetFavCards();
  };
  return (
    <div>
      <Container sx={{ pt: 2 }}>
        <PageHeader
          title="Cards"
          subtitle="On this page you can find all bussines cards from all categories"
        />
        <CardsFeedback
          cards={cards}
          isLoading={isLoading}
          error={error}
          handleDelete={handleDelete}
          handleLike={handleLike}
        />
      </Container>
    </div>
  );
}
