import React, { Component } from "react";
import Navbar from "./components/navbar";
import "./App.css";
import MenuList from "./components/MenuList";
import Contact from "./components/Contact";
import About from "./components/About";
import MenuItemApi from "./generated/src/api/MenuItemApi.js";
import AddMenuItem from "./components/addmenuitem";
import AddImg from "./components/addimage";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Gallery from "./components/Gallery";
import GalleryApi from "./generated/src/api/GalleryApi";
import Auth from "./Auth";
import Callback from "./Callback";
import createHistory from "history/createBrowserHistory";

const history = createHistory();

const auth = new Auth(history);
const menuApi = new MenuItemApi();
const galleryApi = new GalleryApi();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
};

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
    if (localStorage.getItem("isLoggedIn") === "true") {
      auth.renewSession();
    }
  }
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Switch>
            <Route
              path="/callback"
              render={props => {
                handleAuthentication(props);
                return <Callback {...props} />;
              }}
            />
            <Route
              path="/menu/:id"
              render={props => <AddMenuItem {...props} auth={auth} />}
            />
            <Route
              path="/"
              render={props => (
                <React.Fragment>
                  <Navbar />
                  <About />
                  <MenuList
                    menuItems={this.state.menuItems}
                    authenticated={auth.isAuthenticated()}
                  />
                  ;
                  <Gallery gallery={this.state.gallery} />
                  <Contact />
                  {!auth.isAuthenticated() ? (
                    <button type="button" onClick={() => auth.login()}>
                      Login
                    </button>
                  ) : (
                    <div>
                      <button type="button" onClick={() => auth.logout()}>
                        Logout
                      </button>
                      <AddMenuItem {...props} auth={auth} />
                      <AddImg {...props} auth={auth} />
                    </div>
                  )}
                </React.Fragment>
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
