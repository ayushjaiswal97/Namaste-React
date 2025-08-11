import { useState } from "react";
const User = (props) =>{
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(1);

    const incrementCount1 = () => {
        setCount1(count1 + 1);
    }

    const decrementCount1 = () => {
        setCount1(count1 - 1);
    }

    const incrementCount2 = () => {
        setCount2(count2 + 1);
    }

    const decrementCount2 = () => {
        setCount2(count2 - 1);
    }

    return(
        <div className="user-card">
            <h1>Count1 = {count1}</h1>
            <button onClick={incrementCount1}>Increment Count1</button>
            <button onClick={decrementCount1}>Decrement Count1</button>
            
            <h1>Count2 = {count2}</h1>
            <button onClick={incrementCount2}>Increment Count2</button>
            <button onClick={decrementCount2}>Decrement Count2</button>
            
            <h1>Name : {props.name}</h1>
            <h2>Location : Ahemdabad</h2>
            <h2>contact : ayushjaiswal9099@gmail.com</h2>
        </div>
    )
}

export default User;
