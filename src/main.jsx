import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { DataProvider } from "./components/DataProvider/DataProvider.jsx";
import { initialState, reducer } from "./Utility/reducer.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
    <DataProvider reducer={reducer} initialState={initialState}>
      <App />
    </DataProvider>
  // </React.StrictMode>
);
