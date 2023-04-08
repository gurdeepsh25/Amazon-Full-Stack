import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import Home from "./container/Home/Home";
import Login from "./container/Login/Login";
import Header from "./container/Header/Header";
import Footer from "./container/Footer/Footer";
import Payment from "./container/Cart/Payment";
import Orders from "./container/Orders/Orders";
import Checkout from "./container/Cart/Checkout";
import Categories from "./container/Header/Categories";
import HomeAppliances from "./container/Products/Home Appliances/HomeAppliances";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { auth } from "./services/Firebase/Firebase";
import { useStateValue } from "./services/Utils/StateProvider";

const promise = loadStripe(
  "pk_test_51MpW2CSAPhAgw38R98eJojobn05yMdem6M8yGVGoItBZinqvIDRTyYQWOTg9tkovBD3IJuSOjWKvGzLlcUuYTJ2A00ocvaf5Et"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app is loaded
    auth.onAuthStateChanged((authUser) => {
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
            path="/homeAppliances"
            element={
              <>
                <Header />
                <Categories />
                <HomeAppliances />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/orders"
            element={
              <>
                <Header />
                <Categories />
                <Orders />
              </>
            }
          ></Route>
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
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
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
