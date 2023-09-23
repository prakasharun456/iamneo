import React, { useState } from 'react';
const Count  =() =>
{
    const [count, setCount] = useState(5);
    const handle = () =>
    {
        if(count>0)
        {
            setCount(count-1); 
        }
        else
        {
            alert("Game Ends");
        }
    };

return(
        <div>
            <h1>{count}</h1>
            <button onClick ={handle}>Touch me</button>
        </div>
    );
}
export default Count