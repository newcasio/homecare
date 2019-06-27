import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

import ShowTasks from "./tabs/ShowTasks";

function TabContainer(props) {
  return <Typography component="div">{props.children}</Typography>;
}

function Bookings({ bookings }) {
  const [value, setValue] = useState(0);

  //my data
  const [event, setSetEvent] = useState(bookings);

  //tab change
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Upcoming" />
          <Tab label="Requests" />
          <Tab label="Complete" />
        </Tabs>
      </AppBar>

      {value === 0 && (
        <TabContainer>
          <ShowTasks data={event.upcoming} />
        </TabContainer>
      )}
      {value === 1 && (
        <TabContainer>
          <ShowTasks data={event.requests} />
        </TabContainer>
      )}
      {value === 2 && (
        <TabContainer>
          <ShowTasks data={event.complete} />
        </TabContainer>
      )}
    </div>
  );
}

Bookings.propTypes = {
  bookings: PropTypes.object.isRequired
};

export default Bookings;
