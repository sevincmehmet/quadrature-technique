import React from "react";
import { Button, styled } from "@mui/material";

const CustomButton = styled(Button)(({ theme }) => ({
  border: "2px solid",
  borderColor: theme.palette.primary.main,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1),
  fontWeight: 600,
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}));

const CustomStyledButton = () => {
  return <CustomButton>Custom Button</CustomButton>;
};

export default CustomStyledButton;
