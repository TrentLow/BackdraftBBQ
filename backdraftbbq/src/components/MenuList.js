import React from "react";
import MenuItem from "./MenuItem";

const MenuCategory = (props) => {
    return (
    <div style={{border: "4px solid-black", borderRadius: "5px", margin: "0 auto", backgroundColor: "white", width: "45%"}} id={props.id}>
      <h2>{props.name}</h2>
      {props.menuItems.map((menuItem, key) => <MenuItem menuItem={menuItem} />)}
    </div>
    )
}
const MenuList = (props) =>(
    
    <div>
    <h1>Menu</h1>
    <MenuCategory name="Appetizers" id="appetizers" menuItems = {props.menuItems.filter(item => item.category === "appetizers")}/> 
    <MenuCategory name="Side Orders" id="sideorders" menuItems = {props.menuItems.filter(item => item.category === "sides")}/>
    <MenuCategory name="Breakfast" id="breakfast" menuItems = {props.menuItems.filter(item => item.category === "breakfast")}/>
    <MenuCategory name="Kids Menu" id="kidsmenu" menuItems = {props.menuItems.filter(item => item.category === "kids")}/>
    <MenuCategory name="Sandwiches & Baskets" id="sandwichbaskets" menuItems = {props.menuItems.filter(item => item.category === "baskets")}/>
    <MenuCategory name="Beef, Chicken, & Shrimp" id="bfs" menuItems = {props.menuItems.filter(item => item.category === "entrees")}/>
    <MenuCategory name="Beverages" id="beverages" menuItems = {props.menuItems.filter(item => item.category === "beverages")}/>
    </div>
);

export default MenuList;
