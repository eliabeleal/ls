// Array
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Array_literals

// Create an Array []
var numbers = [1, 2, 4, 7];
console.log(numbers[0]);
console.log(numbers[3]);
console.log(numbers[4]); //=> undefined
console.log(numbers);

// Changing Array
// loading element
numbers[4] = 10;
// changing value
numbers[2] = 5;
console.log(numbers);

// Defining Empty Array
var numbers = [];
numbers[0] = 10;
numbers[1] = 20;
numbers[10] = 100;
// accessing array elements
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[10]);
console.log(numbers);

// multiple types
var values = [1, 'fulano', true, null, [1, 2]];
console.log(values[1]);

// string index
var values = [];
values[0] = 1;
values['number'] = 10;
values[1] = 20;

// n dimentions
var students = [];
students[0] = [1, 'fulano', 'fulano@gmail.com'];
students[0][2]; //=> 'fulano@gmail.com'

var students = [];
students[0] = [];
students[0]['id'] = 1;
students[0]['name'] = 'Fulano';
students[0]['email'] = 'fulano@gmail.com'
students[0]['email']; //=> 'fulano@gmail.com'
students[0].email; //=> 'fulano@gmail.com'

// spread operator
var numbers = [1, 2, 3]
console.log([...numbers, 4, 5]);

// interaction: for, for..of, for..in, for([key, value] of [].entries())
var numbers = [1, 2, 4, 7];
var result = '';
for (var flag = 0; flag < numbers.length; flag++) {
  result += numbers[flag]+' ';
}
console.log(result);

var values = [];
values[0] = 1;
values['number'] = 10;
values[1] = 20;

for(let index in values){
  console.log(`${index} => ${values[index]}`);
}

for(let value of values){
  console.log(value);
}

var ips = [
  {address: "192.168.0.2", mask: "255.255.255.0"},
  {address: "192.168.0.10", mask: "255.255.255.0"},
  {address: "192.168.0.26", mask: "255.255.255.0"},
  {address: "192.168.0.30", mask: "255.255.255.0"}
]

for(let ip of ips){
  console.log(ip.address+'/'+ip.mask);
}

for(let ip of ips){
  let row = '';
  for(let key of Object.keys(ip)){
    row += ip[key]+' ';
  }
  console.log(row);
}

// 192.168.0.2 255.255.255.0
// 192.168.0.10 255.255.255.0
// 192.168.0.26 255.255.255.0
// 192.168.0.30 255.255.255.0

result = '<table>';
for(let ip of ips){
  result += '<tr><td>'+ip.address+'</td><td>'+ip.mask+'</td></tr>';
}
result += '</table>';
console.log(result);

// OO
var numbers = [1, 2, 3];
console.log(numbers);
var numbers = new Array(1, 2, 3);
console.log(numbers);
var numbers = new Array(3);
numbers[0] = 1;
numbers[1] = 2;
numbers[2] = 3;
console.log(numbers);

// Array.from
Array.from([1, 2, 3]);
// Array.prototype.length
[1, 2, 3].length;
// Mutator: pop, push, reverse, shift, unshift, sort, splice
var numbers = [1, 2, 3];
numbers.push(4);
numbers.unshift(0);
console.log(numbers);
numbers.pop();
numbers.shift();
console.log(numbers);
numbers.reverse();
console.log(numbers);
numbers.sort();
console.log(numbers);
numbers.splice(1, 2);
console.log(numbers);
// Accessor: includes, join, concat, slice
console.log([1, 2, 3].includes(1));
console.log([1, 2, 3].join(' '));
console.log([1, 2, 3].slice(1,2));
console.log([ 1, 2].concat([ "hello", true, 7 ]));
// Iteration: forEach, reduce, filter, map, every, some, find, reduceRight,
//            entries, keys, values
for([key, value] of [1,2,3].entries()){console.log(`${key} => ${value}`);}
[1, 2, 3, 4, 5, 6].forEach(function(value){console.log(value)});
[1, 2, 3, 4, 5, 6].forEach(function(value, index){console.log(value+' '+index)});
[1, 2, 3, 4, 5, 6].forEach((value) => console.log(value));
[1, 2, 3, 4, 5, 6].forEach((value, index) => console.log(value+' '+index));
console.log([1, 2, 3, 4, 5, 6].map((value) => value * 2));
console.log([1, 2, 3, 4, 5, 6].reduce((addition, value) => addition + value));
console.log([1, 2, 3, 4, 5, 6].reduceRight((addition, value) => addition + value));
console.log([1, 2, 3, 4, 5, 6].filter((value) => value % 2 == 0));
console.log([1, 2, 3, 4, 5, 6].find((value) => value % 2 == 0));
console.log([1, 2, 3, 4, 5, 6].every((value) => value % 2 ==0));
console.log([2, 4, 6].every((value) => value % 2 ==0));
console.log([1, 2, 3, 4, 5, 6].some((value) => value % 2 == 0));

// TypedArray
// From a length
var int8 = new Int8Array(2);
int8[0] = 42;
console.log(int8[0]); // 42
console.log(int8.length); // 2
console.log(int8.BYTES_PER_ELEMENT); // 1

// From an array
var arr = new Int8Array([21,31]);
console.log(arr[1]); // 31
