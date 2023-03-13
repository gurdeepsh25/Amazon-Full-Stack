import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./Components/App";

import { UserContext } from "./Services/Utils/UserContext";
import { StateProvider } from "./Services/Utils/StateProvider";
import reportWebVitals from "./Services/Utils/reportWebVitals";
import reducer, { initialState } from "./Services/Reducers/reducer";

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
