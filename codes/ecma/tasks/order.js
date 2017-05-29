class Product{
  consctruct(id, name, price){
    // this.id
  }
}

class Order {
  consctruct(){
    this.products = []
  }

  addProduct(product){
    this.products.push(product)
  }

  total(){

  }
}

pencil = new Product(1, "Lápis", 1.5)
pen  = new Product(2, "Caneta", 3)
notebook = new Product(3, "Caderno", 20)

order = new Order()
order.addProduct(pencil)
order.addProduct(pencil)
order.addProduct(pen)
order.addProduct(notebook)
console.log(order.total()) //=> 26
