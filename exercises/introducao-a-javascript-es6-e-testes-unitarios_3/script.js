// (1)
const assert = require('assert');

// function sum(a,b) {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//        throw new Error('parameters must be numbers');
//     }
//     return a + b;
// }

// assert.strictEqual(typeof sum, 'function');
// assert.strictEqual(sum(4,5), 9);
// assert.strictEqual(sum(0,0), 0);
// assert.throws(() => {
//     sum(4 ,'5');
// })
// assert.throws(() => {
//     sum(4 , '5');
// }, /^Error: parameters must be numbers$/);

// (2)
// function myRemove(arr, item) {
//     let newArr = [];
//     for (let index = 0; index < arr.length; index += 1) {
//       if (item !== arr[index]) {
//         newArr.push(arr[index]);
//       }
//     }
//     return newArr;
// }

// assert.strictEqual(typeof myRemove, 'function');
// assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]); //compara objetos e arrays
// assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]); //negação compara objetos e arrays
// const myList = [5, 6, 7, 8];
// myRemove(myList, 5)
// assert.deepStrictEqual(myList, [5, 6, 7, 8]);

// (3)

// function myRemoveWithoutCopy(arr, item) {
//   for (let index = 0, len = arr.length; index < len; index += 1) {
//     if (arr[index] === item) {
//       arr.splice(index, 1);
//       index -= 1;
//       len -= 1;
//     }
//   }

//   return arr;
// }

// implemente seus testes aqui

// assert.strictEqual(typeof myRemoveWithoutCopy, 'function');
// assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1,2,4]);
// assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);

// const myList = [1,5,9,8];
// myRemoveWithoutCopy(myList, 8);
// assert.deepStrictEqual(myList, [1,5,9]);

// (4)

// function myFizzBuzz(num) {
//   if (typeof num !== 'number') return false;
//   if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
//   if (num % 3 === 0) return 'fizz';
//   if (num % 5 === 0) return 'buzz';
//   return num;
// }

// implemente seus testes aqui

// assert.strictEqual(typeof myFizzBuzz, 'function');
// assert.strictEqual(myFizzBuzz(15), 'fizzbuzz');
// assert.strictEqual(myFizzBuzz(3), 'fizz');
// assert.strictEqual(myFizzBuzz(5), 'buzz');
// assert.strictEqual(myFizzBuzz(16), 16);
// assert.strictEqual(myFizzBuzz('15'), false);

// (5)

// const obj1 = {
//   title: 'My Title',
//   description: 'My Description',
// };

// const obj2 = {
//   description: 'My Description',
//   title: 'My Title',
// };

// const obj3 = {
//   title: 'My Different Title',
//   description: 'My Description',
// };

// implemente seus testes aqui

// assert.deepStrictEqual(obj2, obj1);


// Praticando código para testes TDD

// (1)
// escreva a função addOne aqui
// function addOne(myArray) {
//     const output = [];
//     for (let index = 0; index < myArray.length; index++) {
//         output.push(myArray[index] += 1);      
//     }
//     return output;
// }

// const myArray = [31, 57, 12, 5];
// const unchanged = [31, 57, 12, 5];
// const expected = [32, 58, 13, 6];
// const output = addOne(myArray);

// assert.strictEqual(typeof addOne, 'function');
// assert.deepStrictEqual(output, expected);
// assert.deepStrictEqual(myArray, unchanged);


// (2)


// escreva a função wordLengths aqui

// const wordLengths = (array) => {
//     const output = [];
//     for (let index = 0; index < array.length; index++) {
//         output.push(array[index].length);
//     }
//     return output;
// };

// const words = ['sun', 'potato', 'roundabout', 'pizza'];
// const expected = [3, 6, 10, 5];

// assert.strictEqual(typeof wordLengths, 'function');
// const output = wordLengths(words);
// assert.deepStrictEqual(output, expected);

// (3)

// escreva a função sumAllNumbers aqui

// const sumAllNumbers = (array) => {
//     let output = 0;
//     for (let i = 0; i < array.length; i += 1) {
//         output += array[i];
//     }
//     return output;
// };

// const numbers = [9, 23, 10, 3, 8];
// const expected = 53;
// const output = sumAllNumbers(numbers);

// assert.strictEqual(typeof sumAllNumbers, 'function');
// assert.strictEqual(output, expected);


// (4)

// escreva a função findTheNeedle aqui
const findTheNeedle = (array, string) => {
    let test = - 1;
    for (let index = 0; index < array.length; index++) {
        if (string == array[index]) test = index; 
    }
    return test;
};

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);