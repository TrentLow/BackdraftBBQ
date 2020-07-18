import React from "react";
import MenuItem from "./MenuItem";

const MenuCategory = props => {
  return (
    <div
      style={{
        border: "4px solid-black",
        borderRadius: "5px",
        backgroundColor: "white"
      }}
      id={props.id}
    >
      <h2>{props.name}</h2>
      {props.menuItems.map((menuItem, key) => (
        <MenuItem menuItem={menuItem} authenticated={props.authenticated} />
      ))}
    </div>
  );
};
const MenuList = props => (
  <div>
    <h1>Menu</h1>
    <MenuCategory
      name="Appetizers"
      id="appetizers"
      menuItems={props.menuItems.filter(item => item.category === "appetizers")}
      authenticated={props.authenticated}
    />
    <MenuCategory
      name="Side Orders"
      id="sideorders"
      menuItems={props.menuItems.filter(item => item.category === "sides")}
      authenticated={props.authenticated}
    />
 
    <MenuCategory
      name="Kids Menu"
      id="kidsmenu"
      menuItems={props.menuItems.filter(item => item.category === "kids")}
      authenticated={props.authenticated}
    />
    <MenuCategory
      name="Sandwiches & Baskets"
      id="sandwichbaskets"
      menuItems={props.menuItems.filter(item => item.category === "baskets")}
      authenticated={props.authenticated}
    />
    <MenuCategory
      name="Dinners"
      id="bfs"
      menuItems={props.menuItems.filter(item => item.category === "entrees")}
      authenticated={props.authenticated}
    />
    <MenuCategory
      name="Beverages"
      id="beverages"
      menuItems={props.menuItems.filter(item => item.category === "beverages")}
      authenticated={props.authenticated}
    />
  </div>
);

export default MenuList;
