import React from 'react';
import ReactDOM from 'react-dom';

const AppComponent = () => {
    return(<div className='app'>
      <Header/> 
      <Body/> 
    </div>)
}

const Header = () => {
    return(<div className='header'>
        <div className='logo-container'>
            <img className="logo" src={"https://cdn-icons-png.flaticon.com/512/2721/2721986.png"}/>
        </div>
        <div className='nav-items'>
        <ul>
           <li>Home</li>
           <li>About Us</li>
           <li>Contact Us</li>
           <li>Cart</li> 
        </ul>
        </div>
    </div>)
}

const RestaurantCard = (props) => {
    const {resName, cuisine, rating, ETA} = props;
    return(<div className='res-card'>
        <h3>{resName}</h3>
        <img src={"https://mir-s3-cdn-cf.behance.net/projects/404/aa7d7196392551.Y3JvcCw4NTIsNjY2LDAsOTk.png"} alt="res-img"/>
        <h4>{cuisine}</h4>
        <h5>{rating}</h5>
        <h5>{ETA}</h5>
    </div>)
}

const Body = () => {
    return(<div className='body'>
        <div className='search'>Search</div>
        <div className='res-container'>
            <RestaurantCard resName="Bengaluru Bhavan" cuisine="South Indian"
            rating="4.4 stars"
            ETA="38 mins"/>
            <RestaurantCard resName="Bengaluru Bhavan" cuisine="South Indian"
            rating="4.4 stars"
            ETA="38 mins"/>
            <RestaurantCard resName="Bengaluru Bhavan" cuisine="South Indian"
            rating="4.4 stars"
            ETA="38 mins"/>
            <RestaurantCard resName="Bengaluru Bhavan" cuisine="South Indian"
            rating="4.4 stars"
            ETA="38 mins"/>
            <RestaurantCard resName="Bengaluru Bhavan" cuisine="South Indian"
            rating="4.4 stars"
            ETA="38 mins"/>
            <RestaurantCard resName="Bengaluru Bhavan" cuisine="South Indian"
            rating="4.4 stars"
            ETA="38 mins"/>
        </div>

    </div>)
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppComponent/>)