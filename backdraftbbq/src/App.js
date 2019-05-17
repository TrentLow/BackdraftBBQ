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
const api = new MenuItemApi();

class App extends Component {
  state = { menuItems: [] };
  componentDidMount() {
    api.getMenuItems((error, data, response) => {
      console.log(data);
      this.setState({ menuItems: data || [] });
    });
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <About />
          <MenuList menuItems={this.state.menuItems} />
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
