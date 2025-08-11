import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
    }
    render() {
        return (
            <div className="user-card">
                <h1>Name : {this.props.name}</h1>
                <h2>Location: Ahemdabad</h2>
                <h2>contact: ayushjaiswal9099@gmail.com</h2>
            </div>
        )
    }
}
export default UserClass;
