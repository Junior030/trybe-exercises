
const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten() {
    console.table(arrays);
   return arrays.reduce((newArray,array) => {
        array.forEach(array => newArray.push(array));        
        return newArray;
    },[]);
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);