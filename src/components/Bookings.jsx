import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

import style from "../const/themes/whiteGreyTheme";

import Upcoming from "./tabs/Upcoming";

function TabContainer(props) {
  // console.log(props);
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

  function handleChange(event, newValue) {
    setValue(newValue);
  }

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
          <Upcoming />
        </TabContainer>
      )}
      {value === 1 && <TabContainer>Requests to be filled</TabContainer>}
      {value === 2 && <TabContainer>Completed tasks</TabContainer>}
    </div>
  );
}

export default Bookings;

Bookings.propTypes = {
  children: PropTypes.node.isRequired
};
