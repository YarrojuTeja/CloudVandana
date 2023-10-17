// Using sort() method

let arr = [100, -70, 56, 0, 49];

arr.sort((a, b) => b - a);

console.log(arr);


//Without using sort() method


let array = [100, -70, 56, 0, 49];


function sortDesc(array){
    let arrayLength = array.length;
    for(let i = 0; i < arrayLength - 1; i++){
        for(let j = 0; j < arrayLength - 1; j++){
            if(array[j] < array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}

let result = sortDesc(array);
console.log("The sorted array is descending order is: ", result);