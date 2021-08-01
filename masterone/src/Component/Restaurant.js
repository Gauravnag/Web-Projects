import { useState } from "react";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";
import "./style.css";
import Menu from "./MenuApi";

const Restaurant = () => {
    const [menuData, setMenuData] = useState(Menu);
    
    //Navber Items will generate Dynmically
    const uniqueList = [
    ...new Set(
        Menu.map((currElem) => {
            return currElem.category
        })
    ), "All"]
    console.log(uniqueList)
    const [menuList, setMenuList] = useState(uniqueList);
    
    //On click Items get filtered
    const filterItem = (category) => {
        if(category === "All") {
            return setMenuData(Menu);
        }
        const updateList = Menu.filter((currElem) => {
            return currElem.category === category;
        });
        setMenuData(updateList)
    }
    
    return(
        <>
          <div className="container">
           <h1>This is Restaurant App</h1>
           <Navbar filterItemAttr={filterItem} menuListAttr={menuList} />
           <MenuCard menuDataAtt={menuData}/>
        </div>
        </>
    )
}

export default Restaurant;