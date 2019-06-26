import React from "react";
import { hot } from "react-hot-loader";

import Bookings from "./components/Bookings";

import data from "./public/data.js";

function App() {
  return (
    <div className="allTabs">
      <Bookings bookings={data} />
    </div>
  );
}

export default hot(module)(App);
