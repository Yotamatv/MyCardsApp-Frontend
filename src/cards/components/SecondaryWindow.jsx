import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";

export default function SecondaryWindow({
  phoneNumber,
  onSubmit,
  id,
  onClose,
}) {
  const handleClose = () => {
    onClose((prev) => !prev);
  };
  function PaperComponent(props) {
    return (
      <Draggable
        handle="#draggable-dialog-title"
        cancel={'[class*="MuiDialogContent-root"]'}
      >
        <Paper {...props} />
      </Draggable>
    );
  }
  return (
    <div>
      <Dialog
        open={true}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        {phoneNumber ? (
          <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
            {phoneNumber}
          </DialogTitle>
        ) : (
          <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
            Delete Card
          </DialogTitle>
        )}

        <DialogContent>
          {!phoneNumber && (
            <DialogContentText>
              Are you sure you want to delete this card?
            </DialogContentText>
          )}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>

          {onSubmit && (
            <Button onClick={() => onSubmit(id)} sx={{ color: "red" }}>
              Delete
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}
