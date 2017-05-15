# Exercícios

## calendar
//  DOM SEG TER QUA QUI SEX SAB
//      01  02  03  04  05  06
//  07  08  09  10  11  12  13
//  14  15  16  17  18  19  20
//  21  22  23  24  25  26  27
//  28  29  30  31

## Hamming
// GGACG  diff 1
// GGTCG
//   ˆ
// GGACGGATTCTG   diff 9
// AGGACGGATTCT
// ˆ ˆˆˆ ˆˆ ˆˆˆ

## CEP
// cep: 01001-000,
// logradouro: Praça da Sé,
// complemento: lado ímpar,
// bairro: Sé,
// localidade: São Paulo,
// uf: SP,
// unidade: ,
// ibge: 3550308,
// gia: 1004

## calc (+, -, *, /)
// calc(1, 1, '+')
//=> 2

// calc(1, 1, '*')
//=> 1

## min
// [1, 4, 2, 6, 10, 3]
// 1

## max
// [1, 4, 2, 6, 10, 3]
// 10

## range
// range(10)
//=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// range(1, 11);
//=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// range(0, 30, 5);
//=> [0, 5, 10, 15, 20, 25]

## zip
// zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false])
//=> [["moe", 30, true], ["larry", 40, false], ["curly", 50, false]]

## uniq
// uniq([1, 2, 1, 4, 1, 3])
//=> [1, 2, 4, 3]

## random
// Math.random()

// random(0, 100)
//=> 42

## Order
pencil = new Product(1, "Lápis", 1.5)
pen  = new Product(2, "Caneta", 3)
notebook = new Product(3, "Caderno", 20)

order = new Order()
order.addProduct(pencil)
order.addProduct(pencil)
order.addProduct(pen)
order.addProduct(notebook)
order.total()
