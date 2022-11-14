import { products, calcStock, createProduct } from "./product.service";

createProduct({
  name: "Camisa",
  createdAt: new Date(),
  stock: 15,
});

createProduct({
  name: "Pantalon",
  createdAt: new Date(),
  stock: 10,
  size: "XL",
});

createProduct({
  createdAt: new Date(),
  stock: 20,
  name: "skirts",
  size: "M",
});

console.log(products);
const total = calcStock();
console.log('total', total);