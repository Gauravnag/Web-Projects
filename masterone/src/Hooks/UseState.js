import { useState } from 'react';

const UseState = () => {
   const [num, setNum] = useState(0)

    return(
        <>
            <h1>This is Hooks App</h1>
            <h2 className="number">Number {num} </h2>
            <button className="button" onClick={() => (setNum(num + 1)) }>Increase</button>
            <button className="button button2" onClick={() => (num > 0 ? setNum(num - 1) : setNum(0))}>Decrease</button>
        </>
    )
}

export default UseState;