(() => {
  type Sizes = "S" | "M" | "L" | "XL";
  type Product = {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  };

  const products: Product[] = [];

  const addProduct = (data: Product):void => {
    products.push(data);
  };

  addProduct({
    title: "Camisa",
    createdAt: new Date(),
    stock: 15,
  });

  addProduct({
    title: "Pantalon",
    createdAt: new Date(),
    stock: 10,
    size: "XL",
  });

  addProduct({
    createdAt: new Date(),
    stock: 20,
    title: "skirts",
    size: "M",
  });
  console.log(products);
})();
