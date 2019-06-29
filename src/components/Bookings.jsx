import React, { useState } from "react";
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
      <AppBar
        position="static"
        style={{
          backgroundColor: "#fafafa",
          boxShadow: "none",
          borderBottom: "1px solid #e4e6e8",
          paddingLeft: "20px"
        }}
      >
        <Tabs value={value} onChange={handleChange}>
          <Tab
            style={{
              marginRight: "28px",
              padding: "0",
              color: "#000000",
              fontSize: "19px"
            }}
            label="Upcoming"
          />
          x
          <Tab
            style={{
              marginRight: "28px",
              padding: "0",
              color: "#000000",
              fontSize: "19px"
            }}
            label="Requests"
          />
          <Tab
            style={{
              marginRight: "28px",
              padding: "0",
              color: "#000000",
              fontSize: "19px"
            }}
            label="Complete"
          />
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
  bookings: PropTypes.object
};

export default Bookings;
