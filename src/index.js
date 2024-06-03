import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { ClerkProvider } from "@clerk/clerk-react";
import { store, persistor, Provider, PersistGate } from "./store";

// Import your publishable key
const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error(
    "Missing REACT_APP_CLERK_PUBLISHABLE_KEY in environment variables"
  );
}

ReactDOM.render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </ClerkProvider>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
