import React from "react";

const AddImg = props => (
  <div>
    <h1>Gallery</h1>
    <div
      id="addimg"
      style={{
        borderRadius: "5px",
        margin: "0 auto",
        backgroundColor: "white",
        width: "45%"
      }}
    >
      <div>
        <label id="name-label">Name</label>
        <input id="name" type="text" placeholder="Name" required />
        <input id="file" type="file" required />
      </div>
    </div>
  </div>
);

export default AddImg;
