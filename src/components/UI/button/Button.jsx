import { Button } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";

function Button() {
  return (
    <div>
      <StyledButton variant="text" size="large">
        Log Out
      </StyledButton>
    </div>
  );
}

export default Button;

const StyledButton = styled(Button)(() => ({
  backgroundColor: "rgb(97,148,199)",
  // border:"2px solid grey",
  color: "white",
  padding: "5px 20px",

  "&:hover": {
    color: "#222",
  },
}));
