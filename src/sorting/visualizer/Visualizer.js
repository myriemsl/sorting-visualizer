import React, { useEffect, useState } from 'react';
import { mergeSortAlgorithm } from '../algorithms/mergeSort';

const arrayColor = 'rgb(184, 153, 224)';
const auxiliaryArrayColor = 'rgb(45, 31, 63)';

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


    const mergeSort = () => {
        const animations = mergeSortAlgorithm(primaryArray);
        for (let i = 0; i < animations.length; i++) {
            const sortArray = document.getElementsByClassName('sort-array');
            const changeColor = i % 3 !== 2;
            if (changeColor) {
                const [firstArrayIndex, secondArrayIndex] = animations[i];
                const firstArrayStyle = sortArray[firstArrayIndex].style;
                const secondArrayStyle = sortArray[secondArrayIndex].style;
                const color = i % 3 === 0 ? auxiliaryArrayColor : arrayColor;

                setTimeout(() => {
                    firstArrayStyle.background = color;
                    secondArrayStyle.background = color;
                }, i * 1);
            } else {
                setTimeout(() => {
                    const [firstArrayIndex, newHeight] = animations[i];
                    const firstArrayStyle = sortArray[firstArrayIndex].style;
                    firstArrayStyle.height = `${newHeight}px`
                }, i * 1)
            }
        }
    }

  return (
    <div className='container'>
        {primaryArray &&
         primaryArray.map((value, index) => {
            return (
                <div className='sort-array' key={index} style={{background: arrayColor, height:`${value}px`}}>
                 </div>
            )
        })}
        <div className='functions-buttons'>
            <button className='reset' onClick={resetArray}>Reset</button>
            <button className='sort' onClick={mergeSort}>Merge Sort</button>
        </div>
    </div>
  )
}

export default Visualizer;