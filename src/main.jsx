import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
const myclientID =
  "1087396237579-r3aestnkj3tsp85jlsu30s8emcvhv1qr.apps.googleusercontent.com";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={myclientID}>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
