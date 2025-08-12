import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component{
    constructor(props){
        super(props);
        console.log("Parent constructor");
    }

    componentDidMount(){
        console.log("Parent ComponentDidMount");
    }

   render(){
    console.log("Parent Render");
    return(
        <div>
            <h1>Our About Us Page</h1>
            <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, voluptatem.</h2>
            <UserClass name={"Ayush Jaiswal"} location={"Ahemdabad"}/>
            <UserClass name={"Rahul"} location={"Pune"}/>
        </div>
        );
      }
    }
export default About;    
    
