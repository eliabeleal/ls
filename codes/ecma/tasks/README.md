# Exercícios

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

## calendar
```
DOM SEG TER QUA QUI SEX SAB
     01  02  03  04  05  06
 07  08  09  10  11  12  13
 14  15  16  17  18  19  20
 21  22  23  24  25  26  27
 28  29  30  31
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

## Order
```
class Product{
  constructor(id, name, price, categories){
    this.id = id
    this.name = name
    this.price = price || 0.0
    this.categories = categories || []
  }
}

class Order {
  constructor(){
    this.products = []
  }

  addProduct(product){
    this.products.push(product)
  }

  total(){
    return this.products
            .reduce((sum, product) => sum + product.price, 0)
  }

  totalByCategory(category){
    return this.products
            .filter(product => product.categories.includes(category))
            .reduce((sum, product) => sum + product.price, 0)
  }
}

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
