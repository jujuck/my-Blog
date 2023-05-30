import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import App from "./App";
import { CurrentUserProvider } from "./contexts/UserContexts";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <CurrentUserProvider>
        <App />
      </CurrentUserProvider>
    </HelmetProvider>
  </React.StrictMode>
);
