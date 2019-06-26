import React from "react";

import Button from "@material-ui/core/Button";

function Status({ status }) {
  if (status === "cancelled") {
    return <div>Cancelled by member</div>;
  } else if (status === "scheduled") {
    return <Button variant="outlined">View booking</Button>;
  } else {
    return <div>Unknown</div>;
  }
}

export default Status;
