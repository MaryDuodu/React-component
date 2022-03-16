import React from "react";

export const Counter = () => {
    const [value, setValue] = React.useState(0);

    const handleincrease = () => {
        setValue((prevValue) =>  prevValue + 1);
    };
    const handledecrease = () => {
        setValue((currValue) => currValue - 1);
    }

    return(
        <div>
        <h1>{value}</h1>
        <button onClick={handleincrease}>Increase</button>
        <button onClick={handledecrease}>Decrease</button>
    </div>
    )
    
}