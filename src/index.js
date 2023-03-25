import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./App";

import { UserContext } from "./services/Utils/UserContext";
import { StateProvider } from "./services/Utils/StateProvider";
import reportWebVitals from "./services/Utils/reportWebVitals";
import reducer, { initialState } from "./services/Reducers/reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserContext.Provider value={{ user: null, setUser: () => {} }}>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    </UserContext.Provider>
  </React.StrictMode>
);

reportWebVitals();
