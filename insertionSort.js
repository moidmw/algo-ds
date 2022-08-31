function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++){
        const currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--){
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

console.log(insertionSort([80, 70, 60, 50, 90, 20, 30, 0]));