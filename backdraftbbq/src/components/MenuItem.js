import React from "react";
import { Link } from "react-router-dom";
const MenuItem = props => {
  return (
    <div>
      {props.menuItem.title}{" "}
      <span style={{ color: "pink" }}>{props.menuItem.price}</span>
      {props.loggedIn && (
        <Link to={`admin/menu/${props.menuItem.id}`}>Edit</Link>
      )}
    </div>
  );
};

export default MenuItem;
