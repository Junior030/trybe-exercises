const mediaAritimetica = (array) => {
    return array.reduce((a, b) => a + b, 0) / array.length;
}
// console.log(mediaAritimetica([1,2,3,4]));
module.exports = mediaAritimetica;