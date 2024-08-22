import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/main.scss";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./context/index.jsx";
import Pages from "./pages/pages";

import { initialState, reducer } from "./context/reducer.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider initialState={initialState} reducer={reducer}>
        <Pages />
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
