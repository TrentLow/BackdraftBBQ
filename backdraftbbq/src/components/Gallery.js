import React from "react";
import { Link } from "react-router-dom";
const Gallery = props => (
  <div>
    <h1>Gallery</h1>
    <div
      id="gallery"
      style={{
        borderRadius: "5px",
        margin: "0 auto",
        backgroundColor: "white",
        width: "45%"
      }}
    >
      {props.gallery.map(gallery => (
        <React.Fragment>
          {props.loggedIn && (
            <Link to={`admin/gallery/${gallery.id}`}>Edit</Link>
          )}{" "}
          <img key={gallery.id} src={gallery.url} />
        </React.Fragment>
      ))}
    </div>
  </div>
);

export default Gallery;
