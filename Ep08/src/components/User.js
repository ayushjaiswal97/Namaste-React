import { useState } from "react";
const User = (props) =>{
    const [count1, setCount1] = useState(0);
    
    return(
        <div className="user-card">
            <h1>Count1 = {count1}</h1>
            <button onClick={()=>{setCount1(count1 + 1)}}>Increment Count1</button>
            <button onClick={()=>setCount1(count1 - 1)}>Decrement Count1</button>
           
            <h1>Name : {props.name}</h1>
            <h2>Location : Ahemdabad</h2>
            <h2>contact : ayushjaiswal9099@gmail.com</h2>
        </div>
    )
}

export default User;
