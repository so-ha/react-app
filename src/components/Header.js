import {useEffect, useState} from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const [btnName, setBtnName] = useState('Login');
    const onlineStatus = useOnlineStatus();
    useEffect(()=>{
        
    }, [])
    return(<div className='header'>
        <div className='logo-container'>
            <img className="logo" src={LOGO_URL}/>
        </div>
        <div className='nav-items'>
        <ul>
            <li>
                {onlineStatus == true ? "Online" : "Offline"}
            </li>
           <li>
            <Link to="/">Home</Link>
            </li>
           <li>
            <Link to="/about">About Us</Link>
            </li>
           <li>
            <Link to="/contact">Contact Us</Link>
            </li>
            <li>
            <Link to="/grocery">Grocery</Link>
            </li> 
           <li>
            <Link to="/cart">Cart</Link>
            </li> 
           <li><button className="login" onClick={()=>{
            btnName == "Login"? setBtnName("Logout") : setBtnName("Login")
           }}>{btnName}</button></li>
        </ul>
        </div>
    </div>)
}

export default Header;