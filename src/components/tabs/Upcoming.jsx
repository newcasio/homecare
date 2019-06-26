import React, { useState } from "react";

import Status from "./Status";

import Avatar from "@material-ui/core/Avatar";
import avatarPic from "../../public/dog.png";

function Upcoming() {
  const [events, setEvents] = useState([
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
    }
  ]);

  const container = {
    display: "flex",
    padding: "15px 0px",
    borderBottom: "1px #E4E6E8 solid"
  };

  const eventStyle = {
    padding: "0px, 10px, 10px, 10px"
  };

  return (
    <div>
      {events.map(event => (
        <div style={container}>
          <Avatar alt="profile pic" src={avatarPic} />
          <div style={eventStyle}>
            <h4 style={{ color: "#0E8A90", margin: "0px" }} key="index">
              {event.name}
            </h4>
            {/*Event text*/}
            <div>
              <span style={{ paddingRight: "8px" }}>{event.date}</span>
              <span>{event.time}</span>
            </div>

            {/*Status componenet*/}
            <Status status={event.status} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Upcoming;
