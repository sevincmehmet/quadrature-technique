import * as React from "react";
import Stack from "@mui/material/Stack";
import { useDispatch } from "react-redux";
import { addImg } from "../redux/imgData/newImgSlice";
import { Button, styled, Container } from "@mui/material";

const CustomButton = styled(Button)(({ theme }) => ({
  borderLeft: "2px solid",
  borderRight: "2px solid",
  borderColor: theme.palette.primary.main,
  borderRadius: 0,
  padding: theme.spacing(1),
  fontWeight: 600,
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}));

export default function Main({ navigate }) {
  const dispatch = useDispatch();

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64Data = reader.result;
        // console.log(base64Data);
        dispatch(
          addImg({
            imageUrl: base64Data,
          })
        );
        navigate("/Started");
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container
      sx={{
        height: "100vh",
        width: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <CustomButton component="label">
        Resim Yükle
        <input
          hidden
          accept="image/*"
          multiple
          type="file"
          onChange={handleFileUpload}
        />
      </CustomButton>
    </Container>
  );
}
