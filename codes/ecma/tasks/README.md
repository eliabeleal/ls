# Exercícios

## Body mass index (BMI)
Category | BMI
-|-
Underweight | <18.5
Normal weight | 18.5–24.9
Overweight | 25–29.9
Obesity | BMI of 30 or greater

```
// BMI = weight/height²
let height = 1.5
let weight = 60
```

## IRRF 2017

Base de cálculo mensal em R$ | Alíquota % | Parcela a deduzir do imposto em R$
-----------------------------|------------|-----------------------------------
Até 1.903,98 | – | –
De 1.903,99 até 2.826,65 | 7,5| 142,80
De 2.826,66 até 3.751,05 | 15,0 | 354,80
De 3.751,06 até 4.664,68 | 22,5 | 636,13
Acima de 4.664,68	| 27,5 | 869,36
https://www.tabeladoirrf.com.br/tabela-irrf-2017.html

```
let salary = 3500.5
```

## numbers
```
00 01 02 03 04 05 06 07 08 09
10 11 12 13 14 15 16 17 18 19
20 21 22 23 24 25 26 27 28 29
30 31 32 33 34 35 36 37 38 39
40 41 42 43 44 45 46 47 48 49
50 51 52 53 54 55 56 57 58 59
60 61 62 63 64 65 66 67 68 69
70 71 72 73 74 75 76 77 78 79
80 81 82 83 84 85 86 87 88 89
90 91 92 93 94 95 96 97 98 99
```

```
99 98 97 96 95 94 93 92 91 90
89 88 87 86 85 84 83 82 81 80
79 78 77 76 75 74 73 72 71 70
69 68 67 66 65 64 63 62 61 60
59 58 57 56 55 54 53 52 51 50
49 48 47 46 45 44 43 42 41 40
39 38 37 36 35 34 33 32 31 30
29 28 27 26 25 24 23 22 21 20
19 18 17 16 15 14 13 12 11 10
09 08 07 06 05 04 03 02 01 00
```

```
// h = 1/1 + 1/2 + ... + 1/n

let n = 10
```

## calendar
```
DOM SEG TER QUA QUI SEX SAB
     01  02  03  04  05  06
 07  08  09  10  11  12  13
 14  15  16  17  18  19  20
 21  22  23  24  25  26  27
 28  29  30  31
```

## Area of Circle
```
// A = πr²
let radius = 10
console.log(areaOfCircle(radius)) //=> 314.16

radius = 20
console.log(areaOfCircle(radius)) //=> 1256.64
```

## Factorial
```
console.log(factorial(4)) //=> 24
console.log(factorial(6)) //=> 720
```

## Fibonacci
```
console.log(fibonacci(4)) //=> 0, 1, 1, 2
console.log(fibonacci(6)) //=> 0, 1, 1, 2, 3, 5
```

## Prime numbers
```
console.log(prime(4))     //=> 2, 3, 5, 7
console.log(prime(6))     //=> 2, 3, 5, 7, 11, 13
console.log(prime(2, 10)) //=> 2, 3, 5, 7
console.log(prime(2, 20)) //=> 2, 3, 5, 7, 11, 13, 17, 19
```

## Hamming
```
function hamming(){
  // TODO
}

let dna1 = 'GGACG'
let dna2 = 'GGTCG'
              ˆ
console.log(hamming(dna1, dna2)) //=> 1

dna1 = 'GGACGGATTCTG
dna2 = 'AGGACGGATTCT
        ˆ ˆˆˆ ˆˆ ˆˆˆ
console.log(hamming(dna1, dna2)) //=> 9
```

## CEP
https://viacep.com.br/ws/01001000/json/

```
cep: 01001-000,
logradouro: Praça da Sé,
complemento: lado ímpar,
bairro: Sé,
localidade: São Paulo,
uf: SP,
unidade: ,
ibge: 3550308,
gia: 1004
```

## calc
```
// operator: '+', '-', '*', '/'
function calc(operand1, operand2, operator){
  // TODO
}

console.log(calc(1, 1, '+')) //=> 2
console.log(calc(1, 1, '*')) //=> 1
```

## min
```
function min(array){
  // TODO
}

let array = [1, 4, 2, 6, 10, 3]
console.log(min(array)) //=> 1
```

## max
```
function max(array){
  // TODO
}

let array = [1, 4, 2, 6, 10, 3]
console.log(max(array)) //=> 10
```

## range
```
// TODO function range

console.log(range(10))
//=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(range(1, 11))
//=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(range(0, 30, 5))
//=> [0, 5, 10, 15, 20, 25]
```

## zip
```
zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false])
//=> [["moe", 30, true], ["larry", 40, false], ["curly", 50, false]]

zip(['moe', 'larry'], [30, 40])
//=> [["moe", 30], ["larry", 40]]
```

## uniq
```
uniq([1, 2, 1, 4, 1, 3])
//=> [1, 2, 4, 3]


uniq([1, 2, 1, 3, 3])
//=> [1, 2, 3]
```

## random
```
Math.random()
//=> 0.058464593778000395

random(0, 100)
//=> 42

let people = ['Fulano', 'Beltrano' , 'Sicrano']
console.log(people[random(0, people.length - 1)])
```

## Citation
```
let name = 'Luiz Carlos Rodrigues Chaves'

console.log(citationName(name))
//=> 'CHAVES; Luiz Carlos Rodribues'

console.log(citationCompactName(name))
//=> 'CHAVES; L. C. R.'
```

## Triangle Checker
```
console.log(triangleChecker(2, 2, 2))    //=> equilateral
console.log(triangleChecker(10, 10, 10)) //=> equilateral

console.log(triangleChecker(3, 4, 4))    //=> isosceles
console.log(triangleChecker(4, 3, 4))    //=> isosceles
console.log(triangleChecker(4, 4, 3))    //=> isosceles
console.log(triangleChecker(10, 10, 2))  //=> isosceles

console.log(triangleChecker(3, 4, 5))    //=> scalene
console.log(triangleChecker(10, 11, 12)) //=> scalene
console.log(triangleChecker(5, 4, 2))    //=> scalene

console.log(triangleChecker(0, 0, 0))    //=> none
console.log(triangleChecker(3, 4, -5))   //=> none
console.log(triangleChecker(1, 1, 3))    //=> none
console.log(triangleChecker(2, 4, 2))    //=> none
```

## Triangle Text
```
console.log(triangleText(1))
//=>
// #

console.log(triangleText(2))
//=>
// #
// ##

console.log(triangleText(3))
//=>
// #
// ##
// ###

console.log(halfDiamondText(1))
//=>
// #

console.log(halfDiamondText(2))
//=>
// #
// ##
// #

console.log(halfDiamondText(3))
//=>
// #
// ##
// ###
// ##
// #

console.log(diamondText(1))
//=>
// #

console.log(diamondText(2))
//=>
//  #
// ###
//  #

console.log(diamondText(3))
//=>
//   #
//  ###
// #####
//  ###
//   #
```

## Sum & Product
```
let array = [1, 2, 3]
console.log(sumArray(array)) //=> 6

array = [2, 2, 2]
console.log(sumArray(array)) //=> 6

array = [1, 2, 3, 4, 5, 6]
console.log(sumArray(array)) //=> 21

array = [1, 2, 3]
console.log(productArray(array)) //=> 6

array = [2, 2, 2]
console.log(productArray(array)) //=> 8

array = [1, 2, 3, 4, 5, 6]
console.log(productArray(array)) //=> 720
```

## Sum odds
```
let array = [1, 2, 3]
console.log(sumArrayOdd(array)) //=> 3

array = [2, 2, 2]
console.log(sumArrayOdd(array)) //=> 0

array = [1, 2, 3, 4, 5, 6]
console.log(sumArrayOdd(array)) //=> 15
```

## String to Number
```
let char = 'A'
let hexa = char.charCodeAt().toString(16)
console.log(hexa) //=> 41

char = '0x41'
hexa = String.fromCharCode(parseInt(char, 16))
console.log(hexa) //=> 'A'

console.log(str2hex('AB'))       //=> '41 42'
console.log(str2hex('ABC'))      //=> '41 42 43'
console.log(hex2str('41 42'))    //=> 'AB'
console.log(hex2str('41 42 43')) //=> 'ABC'

console.log(str2bin('AB'))                         //=> '01000001 01000010'
console.log(str2bin('ABC'))                        //=> '01000001 01000010 01000011'
console.log(bin2str('01000001 01000010'))          //=> 'AB'
console.log(bin2str('01000001 01000010 01000011')) //=> 'ABC'

console.log(str2dec('AB'))       //=> '65 66'
console.log(str2dec('ABC'))      //=> '65 66 67'
console.log(dec2str('65 66'))    //=> 'AB'
console.log(dec2str('65 66 67')) //=> 'ABC'
```

## Average
```
students = [
  {"student": "Fulano", "grade": 10},
  {"student": "Sicrano", "grade": 5},
  {"student": "Beltrano", "grade": 7},
]

console.log(calcAverage(students)) //=> 7.3
```

## Apply bold
let text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'

console.log(applyBold(text, 'ipsum'))
//=> Lorem <b>ipsum</b> dolor sit amet, consectetur adipisicing elit

## Order
```
pencil = new Product(1, 'Lápis', 1.5)
pen  = new Product(2, 'Caneta', 3)
notebook = new Product(3, 'Caderno', 20)

order = new Order()
order.addProduct(pencil)
order.addProduct(pencil)
order.addProduct(pen)
order.addProduct(notebook)
console.log(order.total()) //=> 26

pencil = new Product(1, 'Lápis', 1.5, ['office'])
pen  = new Product(2, 'Caneta', 3, ['office'])
notebook = new Product(3, 'Caderno', 20, ['office'])
flashDrive = new Product(4, 'USB Flash Drive', 40, ['eletronics', 'office'])
headPhone = new Product(5, 'Headphone', 40, ['eletronics'])

order = new Order()
order.addProduct(pencil)
order.addProduct(pencil)
order.addProduct(pen)
order.addProduct(notebook)
order.addProduct(flashDrive)
order.addProduct(flashDrive)
order.addProduct(headPhone)
console.log(order.toString())
//=>
// 1 Lápis      002 UN   1.50   3.00
// 2 Caneta     001 UN   3.00   3.00
// 3 Caderno    001 UN  20.00  20.00
// 4 USB Flash  002 UN  40.00  80.00
// 5 Headphone  001 UN  40.00  40.00
console.log(order.total()) //=> 146
console.log(order.total('eletronics')) //=> 120
console.log(order.total('office')) //=> 106
```

## Sugestões

* [Exercism](http://exercism.io/languages/ecmascript/exercises)
* [Javscript Koan](https://github.com/mrdavidlaing/javascript-koans)
