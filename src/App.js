import React from "react";
import "./App.css";

import Home from "./Pages/Home";
import Reservation from "./Pages/Reservation";
import Currency from "./Pages/Currency";
import SummaryOrder from "./Pages/SummaryOrder";

import Navbar from "./Components/navbar";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/reservation" component={Reservation} />
        <Route exact path="/currency" component={Currency} />
        <Route exact path="/order" component={SummaryOrder} />
      </Switch>
    </>
  );
}

export default App;
