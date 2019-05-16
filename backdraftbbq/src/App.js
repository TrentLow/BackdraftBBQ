import React, { Component } from "react";
import Navbar from "./components/navbar";
import "./App.css";
import MenuList from "./components/MenuList";
import Contact from "./components/Contact";
import About from "./components/About";
import MenuItemApi from "./generated/src/api/MenuItemApi.js";
import AddMenuItem from "./components/addmenuitem";
import AddImg from "./components/addimage";
const api = new MenuItemApi();

class App extends Component {
  state = { menuItems: [] };
  componentDidMount() {
    api.getMenuItems((error, data, response) => {
      console.log(data);
      this.setState({ menuItems: data });
    });
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <About />
        <MenuList menuItems={this.state.menuItems} />
        <Contact />
        <AddMenuItem />
        <AddImg />
      </div>
    );
  }
}

export default App;
