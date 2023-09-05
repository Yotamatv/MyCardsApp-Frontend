import React from "react";
import Maps from "../../components/Maps";
import { Box, CardMedia, Container, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useCardsFormProvider } from "../providers/CardsFormProvider";
import Spinner from "../../components/Spinner";

export default function CardDetailsPage() {
  const { id } = useParams();
  const card = useCardsFormProvider().filter((card) => card.id === id)[0];

  return (
    <Container sx={{ pt: 4 }}>
      {!card ? (
        <Spinner />
      ) : (
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
                {card.title}
              </Typography>
              <br />
              <br />
              <Typography
                variant="h3"
                component="h3"
                color="primary"
                textTransform={"uppercase"}
                fontWeight={450}
              >
                {card.subtitle}
              </Typography>
              <br />
              <br />
              <Typography variant="body1" color="primary" fontSize={24}>
                {card.description}
              </Typography>
              <br />
              <br />
              <Typography variant="body2" color="primary" fontSize={24}>
                <strong>Phone:</strong> {card.phone}
              </Typography>
              <br />
              <br />
              <Typography variant="body2" color="primary" fontSize={24}>
                <strong>Email:</strong> {card.email}
              </Typography>
              <br />
              <br />
              <Typography variant="body2" color="primary" fontSize={24}>
                <strong>Web:</strong> <a href={card.web}>{card.web}</a>
              </Typography>
              <br />
              <br />
              <Typography variant="body2" color="primary" fontSize={24}>
                <strong>Address:</strong> {card.street} {card.houseNumber}{" "}
                {card.city} {card.zip}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <CardMedia component="img" image={card.url} alt={card.alt} />
          </Grid>
          <Grid item xs={4}>
            <Maps />
          </Grid>
        </Grid>
      )}
    </Container>
  );
}
