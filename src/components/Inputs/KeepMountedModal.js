import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import CloseIcon from "@mui/icons-material/Close";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 518,
  bgcolor: "rgb(39, 42, 55)",
  p: 3,
  pb: 2,
  boxShadow: "0px 0px 5px 2px  rgb(0,0,0, 0.1)",
  borderRadius: "3.5px",
};

export default function KeepMountedModal({
  open,
  handleClose,
  horizonalInp,
  veriticalInp,
  lineWidthInp,
  colorInp,
  saveButton,
  title,
  isAnyFieldEmpty,
}) {
  return (
    <div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography
            sx={{ color: "white" }}
            id="keep-mounted-modal-title"
            variant="h6"
            component="h2"
          >
            {title} <EditSharpIcon />
            <hr />
            <div style={{ display: "flex" }}>
              <div style={{ marginBottom: "5px" }}> {horizonalInp}</div>
              <div style={{ marginBottom: "5px" }}> {veriticalInp}</div>
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ marginBottom: "5px" }}> {lineWidthInp}</div>
              <div style={{ marginBottom: "5px" }}> {colorInp}</div>
            </div>
            <div style={{ marginTop: "5px" }}>
              <div>{saveButton}</div>
              <div style={{ marginRight: "5px" }}>
                <Button
                  style={{
                    float: "right",
                    marginRight: "5px",
                    marginTop: "5px",
                    background: "#d50000",
                  }}
                  onClick={handleClose}
                  variant="contained"
                >
                  <span style={{ marginRight: "5px", fontSize: "13px" }}>
                    Kapat
                  </span>
                  <CloseIcon fontSize="small" />
                </Button>{" "}
              </div>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
