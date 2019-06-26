import React from "react";
import { hot } from "react-hot-loader";

import Bookings from "./components/Bookings";

function App() {
  return (
    <div className="allTabs">
      <Bookings />
    </div>
  );
}

export default hot(module)(App);
