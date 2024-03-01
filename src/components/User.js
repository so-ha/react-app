import React from "react";

class User extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(<div className="user">
            <h1>Name </h1>
            <h2>Location</h2> 
            <h3>Contact</h3>
        </div>)
    }
}

export default User