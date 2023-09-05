import { Container, IconButton, Button } from "@mui/material";
import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import useCards from "../hooks/useCards";
import CardsFeedback from "../components/CardsFeedback";
import { AddCircle } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useSearchBar } from "../../providers/SearchBarProvider";
import { useUser } from "../../users/providers/UserProvider";

export default function CardsPage() {
  const {
    cards,
    isLoading,
    error,
    handleGetCards,
    handleDeleteCard,
    handleLikeCard,
  } = useCards();
  const { searchedCards } = useSearchBar();
  const { user } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    handleGetCards();
  }, []);
  const handleDelete = async (id) => {
    await handleDeleteCard(id);
    handleGetCards();
  };
  const handleLike = async (id) => {
    await handleLikeCard(id);
    handleGetCards();
  };

  return (
    <div>
      <Container sx={{ pt: 2 }}>
        <PageHeader
          title="Cards"
          subtitle="On this page you can find all bussines cards from all categories"
        />
        <Button
          variant="text"
          color="primary"
          onClick={() => {
            window.location.reload(false);
          }}
        >
          reload
        </Button>
        {user && (
          <IconButton
            size="large"
            sx={{
              position: "fixed",
              top: "80px",
              right: "0",
            }}
          >
            <AddCircle
              sx={{ width: "50px", height: "50px" }}
              color="primary"
              onClick={() => {
                navigate(ROUTES.CREATE_CARD);
              }}
            />
          </IconButton>
        )}

        {searchedCards && searchedCards.length < 1 ? (
          <CardsFeedback
            cards={cards}
            isLoading={isLoading}
            error={error}
            handleDelete={handleDelete}
            handleLike={handleLike}
          />
        ) : (
          <CardsFeedback
            cards={searchedCards}
            isLoading={isLoading}
            error={error}
            handleDelete={handleDelete}
            handleLike={handleLike}
          />
        )}
      </Container>
    </div>
  );
}
