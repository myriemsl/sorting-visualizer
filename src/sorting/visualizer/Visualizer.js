import React, { useEffect, useState } from 'react';


const Visualizer = () => {

    const [primaryArray, setPrimaryArray] = useState([]);

    const resetArray = () => {
        const array = [];
        for (let i = 0; i < 300; i++) {
            array.push(randomArray(5,600));
        }
        setPrimaryArray(array);
       // console.log(array);
    }

    const randomArray = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    useEffect(() => {
        resetArray();
    }, []);

  return (
    <div className='container'>
        {primaryArray &&
         primaryArray.map((value, index) => {
            return (
                <div className='sort-array' key={index} style={{background:'purple', height:`${value}px`}}>
                 </div>
            )
        })}
        <div className='functions-buttons'>
            <button className='reset' onClick={resetArray}>Reset</button>
            <button className='sort'>Merge Sort</button>
        </div>
    </div>
  )
}

export default Visualizer;