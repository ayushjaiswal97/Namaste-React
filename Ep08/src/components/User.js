import { useState } from "react";
const User = (props) =>{
    const [count1] = useState(0);
    const [count2] = useState(1);
    return(
        <div className="user-card">
            <h1>Count =  {count1}</h1>
            <h1>Count =  {count2}</h1>
            <h1>Name : {props.name}</h1>
            <h2>Location : Ahemdabad</h2>
            <h2>contact : ayushjaiswal9099@gmail.com</h2>
        </div>
    )
}

export default User;