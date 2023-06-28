import React from "react";
import GettingStartedExample from "./components/GettingStartedExample";
import CropperSquaredImage from "./components/CropperSquaredImage";
import { Suspense, useState } from "react";
import Main from "./components/Main";

import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    // Diğer renk ayarlamaları...
    error: {
      main: "#d50000  ", // Yeni hata rengini burada belirtin
    },
    primary: {
      main: "#1f88e4",
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<BigSpinner />}>
        <Router />
      </Suspense>
    </ThemeProvider>
  );
}

function Router() {
  const [page, setPage] = useState("/");

  function navigate(url) {
    setPage(url);
  }

  let content;
  if (page === "/") {
    content = <Main navigate={navigate} />;
  } else if (page === "/Started") {
    content = <GettingStartedExample navigate={navigate} />;
  } else if (page === "/CroppedImg") {
    content = <CropperSquaredImage navigate={navigate} />;
  }
  return content;
}

function BigSpinner() {
  return <h2>🌀 Loading...</h2>;
}
