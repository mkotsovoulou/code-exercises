/**
 * The array method reduce is used to iterate through an array and condense it into one value.

To use reduce you pass in a callback whose arguments are an accumulator (in this case, previousVal) and the current value (currentVal).

The accumulator is like a total that reduce keeps track of after each operation. The current value is just the next element in the array you're iterating through.

reduce has an optional second argument which can be used to set the initial value of the accumulator. If no initial value is specified it will be the first array element and currentVal will start with the second array element. 
 */
var array = [4, 5, 6, 7, 8];

// Here is an example of reduce being used to subtract all the values of an array:
var singleVal1 = array.reduce(function (previousVal, currentVal) {
    return previousVal - currentVal;
}); // -22

var singleVal2 = array.reduce(function (previousVal, currentVal) {
    return previousVal - currentVal;
}, 0); // -30

console.log(singleVal1, singleVal2);

// Use the reduce method to sum all the values in array and assign it to singleVal.
var singleVal = 0;

singleVal = array.reduce(function (previousVal, currentVal) {
    return previousVal + currentVal;
}, 0);

console.log("es5:", singleVal); // 30

//ES2015
var singleValES6 = 0;
singleValES6 = array.reduce((previousVal, currentVal) => previousVal + currentVal);
console.log("es6:", singleValES6); //30
