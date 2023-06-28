import React, { useEffect, useRef, useState } from "react";
import { Button, Container, TextField } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";

import { Cropper } from "react-advanced-cropper";
import "react-advanced-cropper/dist/style.css";
import "react-advanced-cropper/dist/themes/corners.css";
import NumInp from "./Inputs/NumInp";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../redux/imgData/dataSlice";
import { addImg } from "../redux/imgData/newImgSlice";
import SpeedDialTooltipOpen from "./Inputs/SpeedDialTooltipOpen";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const GettingStartedExample = ({ navigate }) => {
  const dispatch = useDispatch();
  const image = useSelector((state) => state.imgSrc.value.imageUrl);

  const [lengths, setLengths] = useState({ horizontal: 35, vertical: 50 });
  // * Boşluk Kontrolü
  const [horizonalLengthsEmpty, setHorizonalLengthsEmpty] = useState(true);
  const [verticalLengthsEmpty, setVerticalLengthsEmpty] = useState(true);
  const [horizonalCropper, setHorizonalCropper] = useState(35);
  const [verticalCropper, setVerticalCropper] = useState(50);
  const cropperRef = useRef(null);
  const [isAnyFieldEmptys, setIsAnyFieldEmptys] = useState(false);

  useEffect(() => {
    dispatch(
      addImg({
        imageUrl: image,
        imgSize: { horizontal: lengths.horizontal, vertical: lengths.vertical },
      })
    );
  }, [lengths]);
  const croppedImg = () => {
    if (cropperRef.current) {
      dispatch(addData(cropperRef.current.getCanvas()?.toDataURL()));
      navigate("/CroppedImg");
    }
  };

  const handleRatioChange = (e) => {
    const { name, value } = e.target;
    setLengths((prevLengths) => ({
      ...prevLengths,
      [name]: value,
    }));
  };

  const handleLengthsSave = () => {
    const isAnyFieldEmpty =
      Boolean(!lengths.horizontal) || Boolean(!lengths.vertical);

    setIsAnyFieldEmptys(isAnyFieldEmpty);
    setHorizonalLengthsEmpty(Boolean(lengths.horizontal));
    setVerticalLengthsEmpty(Boolean(lengths.vertical));

    if (!isAnyFieldEmpty) {
      setHorizonalCropper(lengths.horizontal);
      setVerticalCropper(lengths.vertical);
    }
  };
  return (
    <>
      <Container
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Cropper
          style={{ height: "100vh", width: "auto" }}
          ref={cropperRef}
          src={image}
          className={"cropper"}
          stencilProps={{
            aspectRatio: horizonalCropper / verticalCropper,
            movable: true,
            resizable: true,
          }}
        />
        <SpeedDialTooltipOpen
          title="Kağıdınızın Boyutu"
          horizonalInp={
            <NumInp
              name="horizontal"
              label="Yatay Uzunluk (cm)"
              value={lengths.horizontal}
              handleChange={handleRatioChange}
              error={!horizonalLengthsEmpty}
              type="number"
            />
          }
          veriticalInp={
            <NumInp
              name="vertical"
              label="Dikey Uzunluk (cm)"
              value={lengths.vertical}
              handleChange={handleRatioChange}
              error={!verticalLengthsEmpty}
              type="number"
            />
          }
          newItem={{
            icon: <ArrowRightIcon onClick={croppedImg} />,
            name: "Karele",
          }}
          saveButton={
            <Button
              style={{ float: "right", marginRight: "10px", marginTop: "5px" }}
              onClick={handleLengthsSave}
              variant="contained"
            >
              <span style={{ marginRight: "5px", fontSize: "13px" }}>
                Kaydet
              </span>
              <SaveIcon fontSize="small" />
            </Button>
          }
          isAnyFieldEmpty={isAnyFieldEmptys}
          navigate={navigate}
        />
        <br />
        <div></div>
      </Container>
    </>
  );
};

export default GettingStartedExample;
