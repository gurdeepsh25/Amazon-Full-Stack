import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import Home from "./container/Home/Home";
import Login from "./container/Login/Login";
import Header from "./container/Header/Header";
import Footer from "./container/Footer/Footer";
import Payment from "./container/Cart/Payment";
import Checkout from "./container/Cart/Checkout";
import Categories from "./container/Header/Categories";

import { auth } from "./services/Firebase/Firebase";
import { useStateValue } from "./services/Utils/StateProvider";

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
            path="/payment"
            element={
              <>
                <Header />
                <Payment />
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
