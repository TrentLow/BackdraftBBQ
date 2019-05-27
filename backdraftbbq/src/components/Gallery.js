import React from "react";

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
        <img key={gallery.id} src={gallery.url} />
      ))}
    </div>
  </div>
);

export default Gallery;
