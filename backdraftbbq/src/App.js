import React, { Component } from "react";
import Navbar from "./components/navbar";
import "./App.css";
import MenuList from "./components/MenuList";
import Contact from "./components/Contact";
import About from "./components/About";
import MenuItemApi from "./generated/src/api/MenuItemApi.js";
import AddMenuItem from "./components/addmenuitem";
import AddImg from "./components/addimage";
import { BrowserRouter, Route } from "react-router-dom";
import Gallery from "./components/Gallery";
import GalleryApi from "./generated/src/api/GalleryApi";
const menuApi = new MenuItemApi();
const galleryApi = new GalleryApi();

class App extends Component {
  state = { menuItems: [], gallery: [] };
  componentDidMount() {
    menuApi.getMenuItems((error, data, response) => {
      console.log(data);
      this.setState({ menuItems: data || [] });
    });
    galleryApi.getGalleryImages((error, data, response) => {
      console.log(data);
      this.setState({ gallery: data || [] });
    });
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <About />
          <MenuList menuItems={this.state.menuItems} />
          <Gallery gallery={this.state.gallery} />
          <Contact />
          <Route
            path="/admin"
            render={() => {
              return (
                <React.Fragment>
                  <AddMenuItem />
                  <AddImg />
                </React.Fragment>
              );
            }}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
