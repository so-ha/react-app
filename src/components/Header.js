import {useContext, useEffect, useState} from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import {useSelector} from 'react-redux';

const Header = () => {

    const [btnName, setBtnName] = useState('Login');
    const onlineStatus = useOnlineStatus();

    const cart = useSelector((store) => store.cart.items);

    useEffect(()=>{
        
    }, [])

    const data = useContext(UserContext);
    console.log(data)
    return(<div className='flex justify-between shadow-md mb-5 px-2'>
        <div className='logo-container'>
            <img className="w-20" src={LOGO_URL}/>
        </div>
        <div className='nav-items'>
        <ul className="flex p-5 m-5 align-middle">
            <li className="px-4">
                {onlineStatus == true ? "Online" : "Offline"}
            </li>
           <li className="px-4">
            <Link to="/">Home</Link>
            </li>
           <li className="px-4">
            <Link to="/about">About Us</Link>
            </li>
           <li className="px-4">
            <Link to="/contact">Contact Us</Link>
            </li>
            <li className="px-4">
            <Link to="/grocery">Grocery</Link>
            </li> 
           <li className="px-4">
            <Link to="/cart">Cart ({cart.length} items)</Link>
            </li> 
           <li><button className="login" onClick={()=>{
            btnName == "Login"? setBtnName("Logout") : setBtnName("Login")
           }}>{btnName}</button></li>
           <li className="px-4">{data.loggedInUser}</li>
        </ul>
        </div>
    </div>)
}

export default Header;