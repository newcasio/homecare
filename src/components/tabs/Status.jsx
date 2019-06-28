import React, { useState } from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";

function Status({ event, getIdToRemove }) {
  //pass Id of task to remove up to parent ShowTask
  const removeTask = () => {
    getIdToRemove(event.id);
  };

  switch (event.status) {
    case "cancelled":
      return <div>Cancelled by member</div>;
    case "scheduled":
    case "pending":
      return (
        <Button color="default" variant="contained">
          <strong>View booking</strong>
        </Button>
      );
    case "complete":
    case "reject":
      return (
        <Button color="default" variant="contained" onClick={removeTask}>
          <strong>Remove</strong>
        </Button>
      );
    default:
      return <div>Unknown</div>;
  }
}

Status.propTypes = {
  status: PropTypes.string.isRequired
};

export default Status;
