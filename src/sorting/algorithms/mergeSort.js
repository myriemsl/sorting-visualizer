export function mergeSortAlgorithm (array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    sortingHelper(array, 0, array.length - 1, auxiliaryArray, animations)
    return animations;
} 

function sortingHelper(primaryArray, startIndex, endIndex, auxiliaryArray, animations) {
    if (startIndex === endIndex) return;
    const middleIndex = Math.floor((startIndex + endIndex) / 2);
    sortingHelper(auxiliaryArray, startIndex, middleIndex, primaryArray, animations);
    sortingHelper(auxiliaryArray, middleIndex + 1, endIndex, primaryArray, animations);
    startSorting(primaryArray, startIndex, middleIndex, endIndex, auxiliaryArray, animations)
}

function startSorting(primaryArray, startIndex, middleIndex, endIndex, auxiliaryArray, animations) {
    let i = startIndex;
    let j = middleIndex + 1;
    let k = startIndex;
    let arr = primaryArray;
    let aux = auxiliaryArray;

    while ( i <= middleIndex && j <= endIndex) {
        animations.push([i, j]);
        animations.push([i, j]);
        if (aux[i] <= aux[j]) {
            animations.push([k, aux[i]]);
            arr[k++] = aux[i++];
        } else {
            animations.push([k, aux[j]]);
            arr[k++] = aux[j++];
        }
    }
     while (i <= middleIndex) {
        animations.push([i, i]);
        animations.push([i, i]);
        animations.push([k, aux[i]]);
        arr[k++] = aux[i++];
    }
    while ( j <= endIndex ) {
        animations.push([j, j]);
        animations.push([j, j]);
        animations.push([k, aux[j]]);
        arr[k++] = aux[j++];
    }
}