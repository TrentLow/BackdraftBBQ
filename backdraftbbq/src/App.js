import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MenuItemApi from "./generated/src/api/MenuItemApi.js"
const api = new MenuItemApi();

class App extends Component {
	componentDidMount() {
		api.getMenuItems((error, data, response) => {
			console.log(data);
		});
	}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save!!
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
