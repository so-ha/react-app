import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const RestaurantMenu = () => {
    const [resInfo, setResInfo]=useState({});

    const {resId} = useParams();

    useEffect(()=>{
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
        const json = await data.json();
        console.log(json?.data?.cards[0]?.card?.card?.info);
        setResInfo(json?.data?.cards[0]?.card?.card?.info)
    }

    return(<div className="resMenu">
        
    </div>)
}

export default RestaurantMenu;