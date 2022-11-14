(() => {
  const login = ({ email, password }: { email: string; password: number }) => {
    console.log(email, password);
  };

  // login("algo@algo.com", "123456789");

  login({
    email: "algo@algo.com",
    password: 123456,
  });

  type Sizes = "S" | "M" | "L" | "XL";

  const products: any[] = [];

  const addProduct = (data: {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  }) => {
    products.push(data);
  };

  addProduct({
    title: "Camisa",
    createdAt: new Date(),
    stock: 10,
  });

  addProduct({
    title: "Pantalon",
    createdAt: new Date(),
    stock: 15,
    size: "S",
  });

  addProduct({
    createdAt: new Date(),
    stock: 20,
    title: "skirts",
    size: "M",
  });
  console.log(products);
})();
