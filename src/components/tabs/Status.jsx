import React from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";

function Status({ status }) {
  switch (status) {
    case "cancelled":
      return <div>Cancelled by member</div>;
    case "scheduled":
      return (
        <Button color="primary.contrastText" variant="contained">
          View booking
        </Button>
      );
    case "pending":
      return (
        <Button color="primary.contrastText" variant="contained">
          View booking
        </Button>
      );
    case "complete":
      return (
        <Button color="primary.contrastText" variant="contained">
          Remove
        </Button>
      );
    case "reject":
      return (
        <Button color="primary.contrastText" variant="contained">
          Remove
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
