import React, { useEffect, useState } from 'react';
import { mergeSortAlgorithm } from '../algorithms/mergeSort';
import { quickSortAlgorithm } from '../algorithms/quickSort';
import {bubbleSortAlgorithm } from '../algorithms/bubbleSort';

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


    const quickSort = () => {
        const animations = quickSortAlgorithm(primaryArray);
        for (let i = 0; i < animations.length - 1; i++) {
            const sortArray = document.getElementsByClassName('sort-array');
            const changeColor = i % 6 === 0 || i % 6 === 1;
            if (changeColor === true) {
                const color = i % 6 === 0 ? auxiliaryArrayColor : arrayColor;
                const [firstArrayIndex, secondArrayIndex] = animations[i];
                if (firstArrayIndex === -1) {
                    continue;
                };
                const firstArrayStyle = sortArray[firstArrayIndex].style;
                const secondArrayStyle = sortArray[secondArrayIndex].style;
                setTimeout(() => {
                    firstArrayStyle.background = color;
                    secondArrayStyle.background = color;
                }, i * 1);
            } else {
                const [arrayIndex, newHeight] = animations[i];
                if (arrayIndex === -1) {
                    continue;
                }
                const arrayStyle = sortArray[arrayIndex].style;
                setTimeout(() => {
                    arrayStyle.height = `${newHeight}px`
                }, i * 1)
            }
        }
 
    }


    const bubbleSort = () => {
        const animations = bubbleSortAlgorithm(primaryArray);
        for (let i = 0; i < animations.length; i++) {
            const changeColor = i % 4 === 0 || i % 4 === 1;
            const sortArray = document.getElementsByClassName('sort-array');
            if (changeColor) {
                const [firstArrayIndex, secondArrayIndex] = animations[i];
                const firstArrayStyle = sortArray[firstArrayIndex].style;
                const secondArrayStyle = sortArray[secondArrayIndex].style;
                const color = i % 4 === 0 ? auxiliaryArrayColor : arrayColor;
                setTimeout(() => {
                    firstArrayStyle.background = color;
                    secondArrayStyle.background = color;
                }, i * 1);
            } else {
                const [arrayIndex, newHeight] = animations[i];
                if (arrayIndex === -1) {
                    continue;
                }
                const arrayStyle = sortArray[arrayIndex].style;
                setTimeout(() => {
                    arrayStyle.height = `${newHeight}px`
                }, i * 1);
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
            <button className='sort' onClick={quickSort}>Quick Sort</button>
            <button className='sort' onClick={bubbleSort}>Bubble Sort</button>
        </div>
    </div>
  )
}

export default Visualizer;