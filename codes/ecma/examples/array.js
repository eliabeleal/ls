function min(array){
  let minValue = array[0] // Number.POSITIVE_INFINITY
  for(let index = 0; index < array.length; index++){
    if(minValue > array[index]) minValue = array[index]
  }
  return minValue
}

let array = [1, 4, 2, 6, 10, 3]
console.log(min(array)) //=> 1
array = [100, 45, 2, 65, 10, 33]
console.log(min(array)) //=> 2

function max(array){
  let maxValue = array[0] // Number.NEGATIVE_INFINITY
  for(let value of array){
    if(value > maxValue) maxValue = value
  }
  return maxValue
}

let array = [1, 4, 2, 6, 10, 3]
console.log(max(array)) //=> 10
