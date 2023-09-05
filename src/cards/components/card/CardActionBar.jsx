import { Box, CardActions, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { getUser } from "../../../users/services/localStorageService";
import useCards from "../../hooks/useCards";
import SecondaryWindow from "../SecondaryWindow";
export default function CardActionBar({
  id,
  handleDelete,
  handleLike,
  handleEdit,
}) {
  const user = getUser();
  const { handleGetCards, cards } = useCards();
  useEffect(() => {
    handleGetCards();
  }, [cardswelike]);
  let cardswelike =
    user &&
    cards &&
    cards.filter((card) => card.likes.includes(user.id) & (card._id === id));
  const card = cards && cards.filter((card) => card._id === id)[0];
  const [isCallSecondaryWindowOpen, setCallSecondaryWindowOpen] = useState(
    false
  );
  const [isDeleteSecondaryWindowOpen, setDeleteSecondaryWindowOpen] = useState(
    false
  );

  return (
    <>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Box>
          {user && user.isAdmin && (
            <IconButton
              aria-label="Delete Card"
              onClick={() =>
                setDeleteSecondaryWindowOpen(!isDeleteSecondaryWindowOpen)
              }
            >
              <DeleteIcon />
            </IconButton>
          )}

          {user && user.isBusiness && (
            <IconButton aria-label="Edit Card" onClick={() => handleEdit(id)}>
              <ModeEditIcon />
            </IconButton>
          )}
        </Box>
        <Box>
          <IconButton
            aria-label="Call"
            onClick={() =>
              setCallSecondaryWindowOpen(!isDeleteSecondaryWindowOpen)
            }
          >
            <CallIcon />
          </IconButton>

          {user &&
            (cardswelike && cardswelike.length === 1 ? (
              <IconButton
                aria-label="Add to favorite"
                onClick={() => handleLike(id)}
                color="error"
              >
                <FavoriteIcon />
              </IconButton>
            ) : (
              <IconButton
                aria-label="Add to favorite"
                onClick={() => handleLike(id)}
              >
                <FavoriteIcon />
              </IconButton>
            ))}
        </Box>
      </CardActions>
      {isCallSecondaryWindowOpen && (
        <SecondaryWindow
          phoneNumber={card.phone}
          onClose={setCallSecondaryWindowOpen}
        />
      )}
      {isDeleteSecondaryWindowOpen && (
        <SecondaryWindow
          onSubmit={handleDelete}
          id={id}
          onClose={setDeleteSecondaryWindowOpen}
        />
      )}
    </>
  );
}
