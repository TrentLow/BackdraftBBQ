import React, { Component } from "react";
import Navbar from "./components/navbar";
import "./App.css";
import MenuList from "./components/MenuList";
import Contact from "./components/Contact";
import About from "./components/About";
import MenuItemApi from "./generated/src/api/MenuItemApi.js";
import AddMenuItem from "./components/addmenuitem";
import AddImg from "./components/addimage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Gallery from "./components/Gallery";
import GalleryApi from "./generated/src/api/GalleryApi";
import Auth from './Auth.js';

const auth = new Auth();
const menuApi = new MenuItemApi();
const galleryApi = new GalleryApi();

class App extends Component {
    constructor(props) {
        super(props);
        const user = window.localStorage.getItem("user");
        console.log(user);
        this.state = { menuItems: [], gallery: [], user: user };
    }
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
					<Switch>
						<Route path="/admin/gallery/:id" component={AddImg} />
						<Route path="/admin/gallery" component={AddImg} />
						<Route path="/admin/menu/:id" component={AddMenuItem} />
						<Route path="/admin/menu" component={AddMenuItem} />
						<Route
						  path="/"
						  render={() => {
							return (
							  <React.Fragment>
								<Navbar />
								<About />
								<MenuList menuItems={this.state.menuItems} />
								<Gallery gallery={this.state.gallery} />
								<Contact />
								<div onClick={() => auth.login()}>Login</div>
							  </React.Fragment>
							);
						  }}
						/>
				  </Switch>
				</div>
			</BrowserRouter>
        );
    }
}
export default App;
