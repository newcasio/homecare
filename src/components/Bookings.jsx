import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

import style from "../const/themes/whiteGreyTheme";

import ShowTasks from "./tabs/ShowTasks";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

function Bookings() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  //my data
  const [event, setSetEvent] = useState([
    {
      name: "Sherry Websites Illustration Types",
      date: "Friday, 26.4.19",
      time: "12.30pm - 4.30pm",
      status: "cancelled"
    },
    {
      name: "Sherry Complexity Brown",
      date: "Friday, 26.4.19",
      time: "12.30pm - 4.30pm",
      status: "scheduled"
    },
    {
      name: "Sherry Websites Illustration Types",
      date: "Friday, 26.4.19",
      time: "12.30pm - 4.30pm",
      status: "scheduled"
    },
    {
      name: "Pending Pending",
      date: "Friday, 26.4.19",
      time: "12.30pm - 4.30pm",
      status: "pending"
    },
    {
      name: "Complete Complete",
      date: "Friday, 26.4.19",
      time: "12.30pm - 4.30pm",
      status: "complete"
    },
    {
      name: "Rejected Rejected",
      date: "Friday, 26.4.19",
      time: "12.30pm - 4.30pm",
      status: "reject"
    }
  ]);

  //tab change
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //sort data for tabs display
  let upcomingData = [];
  let requestData = [];
  let completeData = [];

  const sortData = event => {
    upcomingData = [];
    requestData = [];
    completeData = [];
    event.forEach(ev => {
      if (ev.status === "cancelled" || ev.status === "scheduled") {
        upcomingData.push(ev);
      } else if (ev.status === "pending") {
        requestData.push(ev);
      } else if (ev.status === "complete" || ev.status === "reject") {
        completeData.push(ev);
      }
    });
  };
  sortData(event);

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
          <ShowTasks data={upcomingData} />
        </TabContainer>
      )}
      {value === 1 && (
        <TabContainer>
          <ShowTasks data={requestData} />
        </TabContainer>
      )}
      {value === 2 && (
        <TabContainer>
          <ShowTasks data={completeData} />
        </TabContainer>
      )}
    </div>
  );
}

export default Bookings;

Bookings.propTypes = {
  event: PropTypes.node.isRequired
};
