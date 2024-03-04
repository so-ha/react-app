import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import {useDispatch} from 'react-redux';
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {

    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);

    const dispatch = useDispatch();


    useEffect(()=>{
        // fetchMenu();
    }, [])

    const handleAddItem = () => {
        dispatch(addItem("pizza"))
    }


    return(<div className="resMenu">
        Restaurant Menu  <br/>
        1. Burger <button onClick={handleAddItem}>Add</button> <br/>
        2. Pizza <button>Add</button>
    </div>)
}

export default RestaurantMenu;