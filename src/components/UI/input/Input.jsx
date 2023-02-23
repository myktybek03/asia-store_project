import React, { useState } from "react";
import { TextField } from "@mui/material";
import styledComponent from "styled-components";
import { styled } from "@mui/system"
const Input = () => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
  return (
    <Container>
      <StyledTextField
      value={email}
      type="email" 
      label="Email" 
      placeholder="Write you email" 
      variant="filled"  
      onChange={(e) => setEmail(e.target.value)}
      />
      <StyledTextField
      value={password}
        type="password"
        label="Password"
        placeholder="Write your password"
        variant="filled" 
        onChange={(e) => setPassword(e.target.value)}
      />
    </Container>
  );
};

export default Input;

const StyledTextField = styled(TextField) (() => ({
backgroundColor: "#fdfdfd",
width: "400px",
padding: "10px",
borderRadius: "20px"
}))

const Container = styledComponent.div`
display: flex;
flex-direction: column;
align-self: center;
row-gap: 30px;
margin-top: 150px;
border: 2px solid black;
padding: 50px;
border-radius: 20px;
background-color: #0bbef0;

`
