import React, {useState} from 'react';
import './sum.css';

const Sum = () => {
    const [number1 , setNumber1] = useState();
    const [number2 , setNumber2] = useState();
    const [summation , setSummation] = useState(0);

    function cal(){
        setSummation(number1+number2)
    }

    return (
        <>
            <div>
                <h1>Sum App</h1>
                <label>Enter The Value of A : </label>
                <input value={number1} onChange={(e) => setNumber1(+e.target.value)} />
                <label>Enter The Value of B : </label>
                <input value={number2} onChange={(e) => setNumber2(+e.target.value)} />
                <button onClick={cal}>Sum Of Two Number</button>
                <p>Summation : {summation || 0}</p>
            </div>
        </>
    )
}

export default Sum;