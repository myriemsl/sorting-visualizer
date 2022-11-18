export function mergeSortAlgorithm (array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxArray = array.slice();
    sortingHelper(array, 0, array.length - 1, auxArray, animations)
    return animations;
} 

function sortingHelper(primaryArray, startIdx, endIdx, auxArray, animations) {
    if (startIdx === endIdx) return;
    const midIdx = Math.floor((startIdx + endIdx) / 2);
    sortingHelper(auxArray, startIdx, midIdx, primaryArray, animations);
    sortingHelper(auxArray, midIdx + 1, endIdx, primaryArray, animations);
    startSorting(primaryArray, startIdx, midIdx, endIdx, auxArray, animations)
}

function startSorting(primaryArray, startIdx, midIdx, endIdx, auxArray, animations) {
    let i = startIdx;
    let j = midIdx + 1;
    let k = startIdx;
    let arr = primaryArray;
    let aux = auxArray;
    let a = animations;

    while ( i <= midIdx && j <= endIdx) {
        a.push([i, j]);
        a.push([i, j]);
        if (aux[i] <= aux[j]) {
            a.push([k, aux[i]]);
            arr[k++] = aux[i++];
        } else {
            a.push([k, aux[j]]);
            arr[k++] = aux[j++];
        }
    }
    
     while (i <= midIdx) {
        a.push([i, i]);
        a.push([i, i]);
        a.push([k, aux[i]]);
        arr[k++] = aux[i++];
    }
    while ( j <= endIdx ) {
        a.push([j, j]);
        a.push([j, j]);
        a.push([k, aux[j]]);
        arr[k++] = aux[j++];
    }
}