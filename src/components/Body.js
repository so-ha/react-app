import { useEffect, useState } from "react";
import { CDN_URL } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([])

    const [searchText, setSearchText] = useState('')

    useEffect(()=>{
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json.data);
        let index = 4;
        console.log(json?.data?.cards[index]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[index]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setListOfRestaurants(json?.data?.cards[index]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useOnlineStatus();

    if(onlineStatus===false) {
        return(<h1>You're offline</h1>)
    }

    return(<div className='body'>
        {/* <div className='search'>Search</div> */}
        <div className="filter">
            <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value)
                }}/>
                <button onClick={()=>{
                    const filteredList = listOfRestaurants.filter((res)=>{
                        console.log(res.info.name)
                        if(res.info.name.toLowerCase().includes(searchText.toLowerCase(c)))
                        return res;
                    })
                    setFilteredRestaurants(filteredList)
                }}>Search</button>
            </div>
            <button className="filter-btn" onClick={()=>{
                const filteredList = listOfRestaurants.filter((res)=> res.data.avgRating > 4);
                setFilteredRestaurants(filteredList)
            }}>Top Rated Restaurant</button>
        </div>
        <div className='res-container'>
            {filteredRestaurants&&filteredRestaurants.map((res)=>(
            <Link key={res.info.id}  to={`/restaurant/151649`}><RestaurantCard resData={res.info}/></Link>
            ))}
        </div>

    </div>)
}

export default Body;