export function bubbleSortAlgorithm (array) {
    let animations = [];
    let auxArray = array.slice();
    bubbleSort(auxArray, animations)
    return animations;
}

function bubbleSort(auxArray, animations) {
    let aux = auxArray;
    let k = aux.length;
    let a = animations;
    for (let i= 0; i < k; i++) {
        for (let j = 0; j < k - i - 1; j++) {
            a.push([j, j + 1]);
            a.push([j, j + 1]);
            if (aux[j] > aux[j + 1]) {
                a.push([j, aux[j + 1]]);
                a.push([j + 1, aux[j]]);
                swap(aux, j, j + 1);
            } else {
                a.push([-1, -1]);
                a.push([-1, -1]);
            }
        }
    }
}

function swap(aux, a, b){
    let t = aux[a];
    aux[a] = aux[b];
    aux[b] = t;
}