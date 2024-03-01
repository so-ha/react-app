import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = () => {

    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);

    useEffect(()=>{
        fetchMenu();
    }, [])


    return(<div className="resMenu">
        Restaurant Menu 
    </div>)
}

export default RestaurantMenu;