import { TextField } from "@mui/material";
import React from "react";
import { useSearchBar } from "../../../../providers/SearchBarProvider";

export default function SearchBar() {
  const { handleChange } = useSearchBar();
  return (
    <TextField
      id="standard-search"
      label="Search field"
      type="search"
      variant="standard"
      onChange={handleChange}
      sx={{ width: 400 }}
    />
  );
}
