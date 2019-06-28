import React, { useState } from "react";
import PropTypes from "prop-types";
import SvgIcon from "@material-ui/core/SvgIcon";
import Avatar from "@material-ui/core/Avatar";

import Status from "./Status";

import avatarPic from "../../public/dog.png";

function ShowTasks({ data }) {
  const [dataToShow, setDataToShow] = useState(data);

  const removeTask = taskId => {
    const newList = [...data].filter(ev => {
      return ev.id != taskId;
    });
    setDataToShow(newList);
  };

  return (
    <div>
      {dataToShow.map(ev => (
        <div key={ev.id} className="taskContainer">
          <Avatar className="avatar" alt="profile pic" src={avatarPic} />

          <div>
            <div>
              <h4 style={{ color: "#0E8A90", margin: "0px" }}>{ev.name}</h4>
            </div>

            <div className="taskTimeDetails">
              <div>
                <SvgIcon>
                  <path d="M19,4H18V2H16V4H8V2H6V4H5C3.89,4 3,4.9 3,6V20A2,2 0 0,0 5,22H19A2,2 0 0,0 21,20V6A2,2 0 0,0 19,4M19,20H5V10H19V20M19,8H5V6H19V8Z" />
                </SvgIcon>
              </div>

              <div>
                <span style={{ paddingRight: "8px" }}>{ev.date}</span>
              </div>

              <div>
                <SvgIcon>
                  <path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22A9,9 0 0,0 21,13A9,9 0 0,0 12,4M12.5,8H11V14L15.75,16.85L16.5,15.62L12.5,13.25V8M7.88,3.39L6.6,1.86L2,5.71L3.29,7.24L7.88,3.39M22,5.72L17.4,1.86L16.11,3.39L20.71,7.25L22,5.72Z" />
                </SvgIcon>
              </div>

              <div xs={4}>
                <span>{ev.time}</span>
              </div>
            </div>
            <div xs={12}>
              <Status event={ev} getIdToRemove={removeTask} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

ShowTasks.propTypes = {
  data: PropTypes.array.isRequired
};

export default ShowTasks;
