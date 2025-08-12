import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            count1 : 0,
            count2 : 0
        }
        console.log(this.props.name + "Child Constructor");
    }

    componentDidMount(){
        console.log(this.props.name + "Child ComponentDidMount");
          // to make a API call
    }

    render() {
        console.log(this.props.name + "Child Render");

        const {name, location} = this.props;
        const {count1, count2} = this.state;

        return (
            <div className="user-card">
                <h1>Count1 : {count1}</h1>
                <button onClick={() => {
                    this.setState({
                        count1: count1 + 1
                    });
                }}>Decrement Count1</button>
                <button onClick={() => {
                    this.setState({
                        count1: count1 - 1
                    });
                }}>Increment Count1</button>
                <h1>Name : {name}</h1>
                <h2>Location: {location}</h2>
                <h2>contact: ayushjaiswal9099@gmail.com</h2>
            </div>
        )
    }
}
export default UserClass;
