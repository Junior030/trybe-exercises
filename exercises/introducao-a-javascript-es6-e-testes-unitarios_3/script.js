// (1)
const assert = require('assert');

function sum(a,b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
       throw new Error('parameters must be numbers');
    }
    return a + b;
}

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
function myRemove(arr, item) {
    let newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
      if (item !== arr[index]) {
        newArr.push(arr[index]);
      }
    }
    return newArr;
}

// assert.strictEqual(typeof myRemove, 'function');
// assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]); //compara objetos e arrays
// assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]); //negação compara objetos e arrays
// const myList = [5, 6, 7, 8];
// myRemove(myList, 5)
// assert.deepStrictEqual(myList, [5, 6, 7, 8]);

// (3)

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui

// assert.strictEqual(typeof myRemoveWithoutCopy, 'function');
// assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1,2,4]);
// assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);

// const myList = [1,5,9,8];
// myRemoveWithoutCopy(myList, 8);
// assert.deepStrictEqual(myList, [1,5,9]);

// (4)

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui

// assert.strictEqual(typeof myFizzBuzz, 'function');
// assert.strictEqual(myFizzBuzz(15), 'fizzbuzz');
// assert.strictEqual(myFizzBuzz(3), 'fizz');
// assert.strictEqual(myFizzBuzz(5), 'buzz');
// assert.strictEqual(myFizzBuzz(16), 16);
// assert.strictEqual(myFizzBuzz('15'), false);

// (5)

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui

assert.deepStrictEqual(obj2, obj1);