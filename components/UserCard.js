import React from "react";


const UserCard = (props) => {
    return (
      <div className="user-card">
        <h2>{props.name}</h2> {/* uiA: props.name (line 6) - User's Name */}
        <p>Email: {props.email}</p> {/* uiB: props.email (line 7) - User's Email */}
        <p>Age: {props.age}</p> {/* uiC: props.age (line 8) - User's Age */}
      </div>
    );
  };

export default UserCard;
