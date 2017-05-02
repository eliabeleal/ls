// Function
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

// Defining functions / function statement
function addition(param1, param2){
  return param1 + param2;
}

// Calling functions
console.log(addition(1));
console.log(addition(1, 1));
console.log(addition(1, 1, 3));

// Recursion
function factorial(n) {
  return (n == 0)? 1 : n * factorial(n - 1);
}
console.log(factorial(4));

// Scope
var x = 'outside';
function f1(){
  var x = 'inside';
}
console.log(x);
f1();
console.log(x);

var x = 'outside';
function f1(){
  let x = 'inside';
}
console.log(x);
f1();
console.log(x);

var x = 'outside';
function f2(){
  x = 'inside';
}
console.log(x);
f2();
console.log(x);

// Hoisting
console.log(addition(1, 1));
function addition(param1, param2){
  return param1 + param2;
}

// Case Sensitive
function addition(param1, param2){
  return param1 + param2;
}
function Addition(param){
  return param + 1;
}
console.log(Addition(1));
console.log(Addition(1, 2));

// overload
function addition(param1, param2){
  return param1 + param2;
}
function addition(param){
  return param + 1;
}
console.log(addition(1));
console.log(addition(1, 2));

// Default parameters
function addition(param1, param2=0){
  return param1 + param2;
}
console.log(addition(1, 1));
console.log(addition(1));

// Destructuring Assignment
function addition(param1, param2, param3, param4){
  return param1 + param2 + param3 + param4;
}
console.log(addition(...[1, 2, 1, 2]));
console.log(addition(...[1, 2], ...[1, 2]));
console.log(addition(...[1, 2], 1, ...[2]));
console.log(addition(...[1, 2], 1, ...[1, 2]));

function addition({a = 0, b = 0}){
  return a + b;
}
console.log(addition({a: 1, b: 1}));
console.log(addition({b: 1, a: 1}));
console.log(addition({b: 1}));
console.log(addition({}));

// Arguments object
function addition(){
  var summation = 0;
  for(let value of arguments){ //es5
    summation += value;
  }
  return summation;
}
console.log(addition(1));
console.log(addition(1, 1));
console.log(addition(1, 1, 1, 1));

// Rest parameters (spread) ES6
function addition(...params){
  var summation = 0;
  for(let value of params){
    summation += value;
  }
  return summation;
}
console.log(addition(1)); // ([1])
console.log(addition(1, 1)); //([1, 1])
console.log(addition(1, 1, 1, 1)); //([1, 1, 1, 1])

function addition(param, ...params){
  var summation = 0;
  for(let value of params){
    summation += value;
  }
  return summation + param;
}
console.log(addition(1, 1)); //(1, [1])
console.log(addition(1, 1, 1, 1)); //(1, [1, 1, 1])

// Function expression
function(param1, param2){ // anonymous function
  return param1 + param2;
}

const addition = function(param1, param2){ // anonymous function
  return param1 + param2;
}
console.log(addition);
console.log(addition(1, 2));

(function(param1, param2){ // Immediately Invokable Function Expressions (IIFE)
  console.log(param1 + param2);
})(1, 2)

const addition = function sum(param1, param2){
  return param1 + param2;
}
console.log(addition);
console.log(addition(1, 2));
console.log(sum(1, 2)); // ReferenceError: sum is not defined

// method / callback
var ip = {
  address: "192.168.0.1",
  mask: "255.255.255.0",
  toString: function(){
    return `${this.address}/${this.mask}`
  }
}
console.log(ip.address);
console.log(ip.toString());

// Closure
function multiplier(factor){
  return function(number){
    return number * factor;
  }
}
var twice = multiplier(2);
console.log(twice(5));

// Nested functions and closures
function addSquares(a,b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
a = addSquares(2,3); // returns 13
b = addSquares(3,4); // returns 25
c = addSquares(4,5); // returns 41

// es6 Arrow Function (=>)
const sum = function(param1, param2){ return param1 + param2 };

const sum = (param1, param2) => { return param1 + param2 };
const sum = (param1, param2) => param1 + param2;

console.log([1,1,1].reduce((sum,value) => sum+value));
console.log([1,1,1].reduce(function(sum,value){return sum+value}, 0));

// higher-order function
//  http://eloquentjavascript.net/05_higher_order.html#h_xxCc98lOBK
//  Functions that operate on other functions, either by taking them as arguments
//  or by returning them, are called higher-order functions
var animals = [
  { name: 'Waffles',  type: 'dog', age: 12 },
  { name: 'Fluffy',   type: 'cat', age: 14 },
  { name: 'Spelunky', type: 'dog', age: 4 },
  { name: 'Hank',     type: 'dog', age: 11 },
];
var oldDogNames = animals
  .filter((x) => x.age > 10 && x.type === 'dog')
  .map((x) => x.name);
console.log(oldDogNames);
var totalDogYears = animals
  .filter((x) =>  x.type === 'dog')
  .map((x) => x.age)
  .reduce((prev, cur) => prev + cur, 0)
console.log(totalDogYears);
