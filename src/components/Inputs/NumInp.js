import React from "react";
import { TextField, styled } from "@mui/material";

const CustomInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputLabel-root": {
    color: "#ddd",
    transition: theme.transitions.create(["transform"], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.standard,
    }),
  },
  "& .MuiFilledInput-input": {
    background: "#3d404b",
    color: "#fff",
    borderRadius: "7px 7px 0 0",
  },
}));

const NumberInput = ({ name, label, value, handleChange, error, type }) => {
  return (
    <CustomInput
      sx={{ margin: "0 10px" }}
      type={type}
      name={name}
      label={label}
      value={value}
      onChange={handleChange}
      error={error}
      variant="filled"
    />
  );
};

export default NumberInput;
