import React from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";

function Status({ status }) {
  switch (status) {
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
        <Button color="default" variant="contained">
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
