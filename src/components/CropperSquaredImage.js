import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Container, TextField, Button } from "@mui/material";

import SpeedDialTooltipOpen from "./Inputs/SpeedDialTooltipOpen";
import NumberInput from "./Inputs/NumInp";
import SaveIcon from "@mui/icons-material/Save";

const CropperSquaredImage = ({ navigate }) => {
  const canvasRef = useRef(null);
  const croppedImgSrc = useSelector((state) => state.src.value);
  const imgData = useSelector((state) => state.imgSrc.value);
  const [isAnyFieldEmptys, setIsAnyFieldEmptys] = useState(false);

  console.log(imgData);
  // * kaydetme butonu
  const [save, setSave] = useState(false);
  // * Değişkenler
  const [selectedColor, setSelectedColor] = useState("#000");
  const [squaredLengths, setSquaredLengths] = useState({
    horizontal: 7,
    vertical: 10,
  });
  const [thickness, setThickness] = useState(4);
  // * Boşluk Kontrolü
  const [horizonalEmpty, setHorizonalEmpty] = useState(true);
  const [verticalEmpty, setVerticalEmpty] = useState(true);
  const [thicknessEmpty, setThicknessEmpty] = useState(true);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const img = new Image();

    img.src = croppedImgSrc;

    img.onload = () => {
      const width = img.width;
      const height = img.height;
      const ratioHorizonal = width / imgData?.imgSize?.horizontal;
      const ratioVertical = height / imgData?.imgSize?.vertical;
      const horizonalSize = squaredLengths?.horizontal * ratioHorizonal;
      const verticalSize = squaredLengths?.vertical * ratioVertical;
      // const squaresPerRow = Math.ceil(width / squareSize);

      canvas.width = width;
      canvas.height = height;

      ctx.drawImage(img, 0, 0);
      // ---- kare çizgilerinin görünümü----
      ctx.strokeStyle = selectedColor;
      ctx.lineWidth = thickness;
      //------------------------------------
      for (let i = 0; i < height; i += verticalSize) {
        ctx.beginPath();
        ctx.moveTo(0, i - 3);
        ctx.lineTo(width, i);
        ctx.stroke();
      }

      for (let i = 0; i < width; i += horizonalSize) {
        ctx.beginPath();
        ctx.moveTo(i - 3, 0);
        ctx.lineTo(i, height);
        ctx.stroke();
      }
      const data = {
        width: width,
        height: height,
        ratioHorizonal: ratioHorizonal,
        ratioVertical: ratioVertical,
      };
      console.log(data);
    };
  }, [save, selectedColor]); // Dependencileri güncelledim

  const handleRatioChange = (e) => {
    const { name, value } = e.target;
    setSquaredLengths((prevLengths) => ({
      ...prevLengths,
      [name]: value,
    }));
  };

  const handleColorChange = (event) => {
    // alert(event.target.value);

    setSelectedColor(event.target.value);
  };
  const handleThickness = (event) => {
    setThickness(event.target.value);
  };
  const handleSave = () => {
    const isAnyFieldEmpty =
      Boolean(!squaredLengths.horizontal) ||
      Boolean(!squaredLengths.vertical) ||
      Boolean(!thickness);

    setIsAnyFieldEmptys(isAnyFieldEmpty);

    setHorizonalEmpty(Boolean(squaredLengths.horizontal));
    setVerticalEmpty(Boolean(squaredLengths.vertical));
    setThicknessEmpty(Boolean(thickness));
    if (!isAnyFieldEmpty) {
      setSave(!save);
    } else {
    }
  };
  return (
    <Container
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <canvas
        style={{
          height: "100vh",
          width: "auto",
          boxShadow: `0px 0px 0px 1px ${selectedColor}`,
        }}
        ref={canvasRef}
      />
      <SpeedDialTooltipOpen
        title="Çizgileri Düzenle"
        handleSave={handleSave}
        horizonalInp={
          <NumberInput
            name="horizontal"
            label="Yatay Uzunluk (cm)"
            value={squaredLengths.horizontal}
            handleChange={handleRatioChange}
            error={!horizonalEmpty}
            // style={!horizonalEmpty && { borderColor: "yellow" }}
            type="number"
          />
        }
        veriticalInp={
          <NumberInput
            name="vertical"
            label="Dikey Uzunluk (cm)"
            value={squaredLengths.vertical}
            handleChange={handleRatioChange}
            error={!verticalEmpty}
            type="number"
          />
        }
        lineWidthInp={
          <NumberInput
            label="Çizgi Kalınlığı"
            value={thickness}
            handleChange={handleThickness}
            error={!thicknessEmpty}
            type="number"
          />
        }
        colorInp={
          <TextField
            type="color"
            name="color"
            value={selectedColor}
            onChange={handleColorChange}
            InputProps={{
              style: {
                background: "#3d404b",
                width: "215px",
                padding: "0",
                border: "none",
                outline: "none",
                margin: "0 10px",
              },
            }}
            isAnyFieldEmpty={isAnyFieldEmptys}
          />
        }
        saveButton={
          <Button
            style={{ float: "right", marginRight: "10px", marginTop: "5px" }}
            onClick={handleSave}
            variant="contained"
          >
            <span style={{ marginRight: "5px", fontSize: "13px" }}>Kaydet</span>
            <SaveIcon fontSize="small" />
          </Button>
        }
        control={{
          horizonalEmpty: horizonalEmpty,
          verticalEmpty: verticalEmpty,
          thicknessEmpty: thicknessEmpty,
        }}
        navigate={navigate}
      />
    </Container>
  );
};

export default CropperSquaredImage;
