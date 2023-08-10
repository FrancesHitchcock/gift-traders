import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-1sx3wgsck0p3okfb.us.auth0.com"
      clientId="Kw19PFfgvgOGidgeP16lHiEttxb4ta11"
      authorizationParams={{
        redirect_uri: "https://gift-traders.netlify.app/admin",
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

// dev-1sx3wgsck0p3okfb.us.auth0.com

// Auth0 login $Frances123

// http://localhost:3000/

//"https://gift-traders.netlify.app/admin"
