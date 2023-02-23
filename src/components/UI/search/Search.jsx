import React, { useState } from "react";
import { IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";
// import { borderRadius, width } from "@mui/system";

const Search = () => {
  const [endAdorment, setExpanded] = useState(false);

  const handleSearchClick = () => {
    setExpanded(!endAdorment);
  };

  return (
    <div>
      <IconButton onClick={handleSearchClick}>
        <SearchIcon />
      </IconButton>
      {endAdorment && (
        <StyledInput
          type="search"
          variant="filled"
          margin="normal"
          fullWidth
          label="Что ищем?"
        />
      )}
    </div>
  );
};

export default Search;
const StyledInput = styled(TextField)(() => ({
  width: "40%",
  marginTop: "4rem",
  borderRadius: "none",
}));
