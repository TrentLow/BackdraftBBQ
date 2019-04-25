import React, { Component } from 'react';
import Navbar from './components/navbar'
import './App.css';
import MenuList from "./components/MenuList";
import Contact from "./components/Contact";

import MenuItemApi from "./generated/src/api/MenuItemApi.js";
const api = new MenuItemApi();



class App extends Component {
  state = {menuItems: []}
	componentDidMount() {
		api.getMenuItems((error, data, response) => {
      console.log(data);
      this.setState({menuItems: data});
		});
	}
  render() {
    return (
      <div className="App">
        <Navbar />
          <MenuList  menuItems = {this.state.menuItems}/> 
          <Contact/>

          
      </div>
    );
  }
}

export default App;
