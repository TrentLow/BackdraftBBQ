import React, { Component } from "react";
import GalleryApi from "../generated/src/api/GalleryApi";

const galleryApi = new GalleryApi();
class AddImg extends Component {
  state = { url: "" };
  componentDidMount() {
    if (this.props.match.params.id) {
      galleryApi.getGalleryImage(
        this.props.match.params.id,
        (error, data, response) => {
          console.log(data);
          this.setState({
            url: data.url
          });
        }
      );
    }
  }
  ondelete = () => {
    let txt;
    const result = window.confirm(
      `Are you sure you want to delete ${this.state.title}?`
    );
    if (result == true) {
      galleryApi.deleteGalleryImage(this.props.match.params.id);
    } else {
      txt = "You canceled the deletion process!";
    }
  };
  render() {
    return (
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
          <button onClick={this.ondelete}>Delete</button>
        </div>
      </div>
    );
  }
}
export default AddImg;
