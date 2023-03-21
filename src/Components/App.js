import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import Home from "../Home";
import Login from "../Layouts/Login/Login";
import Header from "../Layouts/Header/Header";
import Footer from "../Layouts/Footer/Footer";
import Checkout from "../Layouts/Cart/Checkout";
import Categories from "../Layouts/Header/Categories";

import { auth } from "../Services/Firebase/Firebase";
import { useStateValue } from "../Services/Utils/StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app is loaded
    auth.onAuthStateChanged((authUser) => {
      console.log("The User is >>>>", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    // BEM
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          ></Route>
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Categories />
                <Checkout />
              </>
            }
          ></Route>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Categories />
                <Home />
                <Footer />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
