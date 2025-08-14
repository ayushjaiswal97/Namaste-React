import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            userInfo:{
                name: "Dummy",
                location: "Default",
            },
        };
        console.log(this.props.name + "Child Constructor");
    }

    async componentDidMount(){
        
        console.log(this.props.name + "Child ComponentDidMount");
        // to make a API call

        const data = await fetch("https://api.github.com/users/ayushjaiswal97");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });
        console.log(json);

    }

    componentDidUpdate(){
        console.log("Component Did Update");
    }

    componentWillUnmount(){
        console.log("Component Will Unmount");
    }

    render() {
        console.log(this.props.name + "Child Render");
        const { name, location, avatar_url } = this.state.userInfo;
        
        return (
            <div className="user-card">
            <img src={avatar_url} />
                <h1>Name : {name}</h1>
                <h2>Location: {location}</h2>
                <h2>contact: ayushjaiswal9099@gmail.com</h2>
            </div>
        )
    }
}
export default UserClass;
