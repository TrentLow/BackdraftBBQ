import React, { Component } from "react";

class AddMenuItem extends Component {
  state = {};
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
              Catagory
            </label>
            <select>
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
            {" "}
            <label id="name-label">Name</label>
            <input id="name" type="text" placeholder="Name" required />
          </div>
          <div>
            {" "}
            <label id="number-label">Price</label>
            <input
              id="number"
              type="number"
              min="0.01"
              step="0.01"
              placeholder="1.99"
              required
            />
          </div>
        </div>
      </div>
    );
  }
}
export default AddMenuItem;
