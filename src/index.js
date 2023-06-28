import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CssBaseline from "@mui/material/CssBaseline";

import { store } from "./redux/store";
import { Provider } from "react-redux"; // sarmalandığı comp. lerin tamamını kendisine geçilen storedaki dataları paslamakla görevli

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <React.Fragment>
      <CssBaseline />
      <Provider store={store}>
        <App />
      </Provider>
    </React.Fragment>
  </React.StrictMode>
);
