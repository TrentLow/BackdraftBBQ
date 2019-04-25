import React from "react";

const MenuItem = (props) => {
    return (
<div>{props.menuItem.title} <span style={{color: "pink"}}>{props.menuItem.price}</span></div>
    );
};

export default MenuItem;