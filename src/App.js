import React from "react";
import "./App.css";

import Home from "./Pages/Home";
import Reservation from "./Pages/Reservation";
import Currency from "./Pages/Currency";
import SummaryOrder from "./Pages/SummaryOrder";
// import Rooms from "./Pages/Rooms";
// import SingleRoom from "./Pages/SingleRoom";
// import Error from "./Pages/Error";

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
        {/* <Route exact path="/rooms/" component={Rooms} /> */}
        {/* <Route exact path="/rooms/:slug" component={SingleRoom} /> */}
        {/* <Route component={Error} /> */}
      </Switch>
    </>
  );
}

export default App;
