import React from "react";
import UserContext from "../utils/UserContext";

class User extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(<div className="user">
            <h1>Name </h1>
            <div>Logged In User : 
                <UserContext.Consumer>
                     {(data)=>{return(<h1>{data.loggedInUser}</h1>)}}
                </UserContext.Consumer>
            </div>
            <h2>Location</h2> 
            <h3>Contact</h3>
        </div>)
    }
}

export default User