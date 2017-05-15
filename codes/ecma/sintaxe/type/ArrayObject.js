// Array
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Array_literals


// Array Object
let numbers = [1, 2, 4, 7]
console.log(numbers)    //=> [ 1, 2, 4, 7 ]

let numbers = new Array(1, 2, 4, 7)
console.log(numbers)    //=> [ 1, 2, 4, 7 ]

let numbers = new Array(3)
console.log(numbers)    //=> [ , ,  ]
numbers[0] = 1
numbers[1] = 2
numbers[2] = 3
console.log(numbers)    //=> [ 1, 2, 3 ]

// Array.from
Array.from([1, 2, 3])
// Array.prototype.length
[1, 2, 3].length
// Mutator: pop, push, reverse, shift, unshift, sort, splice
let numbers = [1, 2, 3]
numbers.push(4)
numbers.unshift(0)
console.log(numbers)
numbers.pop()
numbers.shift()
console.log(numbers)
numbers.reverse()
console.log(numbers)
numbers.sort()
console.log(numbers)
numbers.splice(1, 2)
console.log(numbers)
// Accessor: includes, join, concat, slice
console.log([1, 2, 3].includes(1))
console.log([1, 2, 3].join(' '))
console.log([1, 2, 3].slice(1,2))
console.log([ 1, 2].concat([ "hello", true, 7 ]))
// Iteration: forEach, reduce, filter, map, every, some, find, reduceRight,
//            entries, keys, values
for([key, value] of [1,2,3].entries()){console.log(`${key} => ${value}`)}
[1, 2, 3, 4, 5, 6].forEach(function(value){console.log(value)})
[1, 2, 3, 4, 5, 6].forEach(function(value, index){console.log(value+' '+index)})
[1, 2, 3, 4, 5, 6].forEach((value) => console.log(value))
[1, 2, 3, 4, 5, 6].forEach((value, index) => console.log(value+' '+index))
console.log([1, 2, 3, 4, 5, 6].map((value) => value * 2))
console.log([1, 2, 3, 4, 5, 6].reduce((addition, value) => addition + value))
console.log([1, 2, 3, 4, 5, 6].reduceRight((addition, value) => addition + value))
console.log([1, 2, 3, 4, 5, 6].filter((value) => value % 2 == 0))
console.log([1, 2, 3, 4, 5, 6].find((value) => value % 2 == 0))
console.log([1, 2, 3, 4, 5, 6].every((value) => value % 2 ==0))
console.log([2, 4, 6].every((value) => value % 2 ==0))
console.log([1, 2, 3, 4, 5, 6].some((value) => value % 2 == 0))

// TypedArray
// From a length
let int8 = new Int8Array(2)
int8[0] = 42
console.log(int8[0]) // 42
console.log(int8.length) // 2
console.log(int8.BYTES_PER_ELEMENT) // 1

// From an array
let arr = new Int8Array([21,31])
console.log(arr[1]) // 31
