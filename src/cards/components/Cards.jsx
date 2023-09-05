import { Grid } from "@mui/material";
import React from "react";
import BusinessCard from "./card/BusinessCard";
import ROUTES from "../../routes/routesModel";
import { useNavigate } from "react-router-dom";

export default function Cards({ cards, handleDelete, handleLike }) {
  const navigate = useNavigate();
  const handleEdit = (id) => {
    navigate(`${ROUTES.EDIT_CARD}/${id}`);
  };

  return (
    <>
      <Grid container>
        {cards.map((card) => (
          <Grid item key={card._id} xs={12} sm={6} md={4} lg={3}>
            <BusinessCard
              card={card}
              key={card._id}
              handleDelete={handleDelete}
              handleLike={handleLike}
              handleEdit={handleEdit}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
