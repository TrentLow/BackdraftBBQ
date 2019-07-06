import React, { Component } from "react";
import MenuItemApi from "../generated/src/api/MenuItemApi.js";

const menuApi = new MenuItemApi();

class AddMenuItem extends Component {
  state = { category: "appetizers", price: "", title: "" };
  componentDidMount() {
    if (this.props.match.params.id) {
      menuApi.getMenuItem(
        this.props.match.params.id,
        (error, data, response) => {
          console.log(data);
          this.setState({
            category: data.category,
            price: data.price,
            title: data.title
          });
        }
      );
    }
  }
  ondelete = () => {
    menuApi.apiClient.authentications[
      "Bearer"
    ].accessToken = this.props.auth.getIdToken();
    let txt;
    const result = window.confirm(
      `Are you sure you want to delete ${this.state.title}?`
    );
    if (result == true) {
      menuApi.deleteMenuitem(this.props.match.params.id);
    } else {
      txt = "You canceled the deletion process!";
    }
  };
  onsubmit = () => {
    menuApi.apiClient.authentications[
      "Bearer"
    ].accessToken = this.props.auth.getIdToken();
    if (this.props.match.params.id) {
      menuApi.editMenuItem(this.props.match.params.id, {
        category: this.state.category,
        price: this.state.price,
        title: this.state.title,
        id: ""
      });
    }
    menuApi.addMenuItem(
      {
        category: this.state.category,
        price: this.state.price,
        title: this.state.title,
        id: ""
      },
      (error, data, response) => {
        console.log(data);
      }
    );
  };
  oncategory = event => {
    this.setState({ category: event.target.value }, () =>
      console.log(this.state.category)
    );
  };
  onprice = event => {
    this.setState({ price: event.target.value }, () =>
      console.log(this.state.price)
    );
  };
  ontitle = event => {
    this.setState({ title: event.target.value }, () =>
      console.log(this.state.title)
    );
  };
  render() {
    return (
      <div>
        <h1>Add Menu Item</h1>
        <div
          id="additem"
          style={{
            borderRadius: "5px",
            margin: "0 auto",
            backgroundColor: "white",
            width: "45%"
          }}
        >
          <div>
            <label id="catagory-label" for="catagory">
              Category
            </label>
            <select onChange={this.oncategory}>
              <option value="appetizers">Appetizers</option>
              <option value="sides">Sides</option>
              <option value="breakfast">Breakfast</option>
              <option value="kids">Kids</option>
              <option value="baskets">Baskets</option>
              <option value="entrees">Entrees</option>
              <option value="beverages">Beverages</option>
            </select>
          </div>
          <div>
            <label id="name-label">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              required
              onChange={this.ontitle}
              value={this.state.title}
            />
          </div>
          <div>
            <label id="number-label">Price</label>
            <input
              id="number"
              type="number"
              min="0.01"
              step="0.01"
              placeholder="1.99"
              required
              onChange={this.onprice}
              value={this.state.price}
            />
          </div>
          <button onClick={this.onsubmit}>Submit</button>
          <button onClick={this.ondelete}>Delete</button>
        </div>
      </div>
    );
  }
}
export default AddMenuItem;
