import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import KeepMountedModal from "./KeepMountedModal";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

export default function SpeedDialTooltipOpen({
  horizonalInp,
  veriticalInp,
  lineWidthInp,
  colorInp,
  saveButton,
  title,
  newItem,
  isAnyFieldEmpty,
  navigate,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [modalOpen, setModalOpen] = React.useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  return (
    <>
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        <SpeedDialAction
          key="Edit"
          icon={<EditSharpIcon onClick={handleModalOpen} />}
          tooltipTitle="Düzenle"
          tooltipOpen
          onClick={handleClose}
        />
        <SpeedDialAction
          key="restart"
          icon={<RestartAltIcon onClick={() => navigate("/")} />}
          tooltipTitle="Yenileme"
          tooltipOpen
          onClick={handleClose}
        />
        {newItem && (
          <SpeedDialAction
            key={newItem?.name}
            icon={newItem?.icon}
            tooltipTitle={newItem?.name}
            tooltipOpen
            onClick={handleClose}
          />
        )}
      </SpeedDial>
      <KeepMountedModal
        title={title}
        open={modalOpen}
        handleClose={handleModalClose}
        horizonalInp={horizonalInp}
        veriticalInp={veriticalInp}
        lineWidthInp={lineWidthInp}
        colorInp={colorInp}
        saveButton={saveButton}
        isAnyFieldEmpty={isAnyFieldEmpty}
      />
    </>
  );
}
