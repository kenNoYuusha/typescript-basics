(() => {

    //en las funciones se tipa cada parametro cantidad y tipo y se deben respetar ambas cosas, de lo contrario mostrara error
  type Sizes = "S" | "M" | "L" | "XL" | 12;
  function createProductJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  }

  const producto1 = createProductJson("P1", new Date(), 12, "XL");
  console.log(producto1);
  console.log(producto1.title);
  console.log(producto1.stock);
  console.log(producto1.size);


  //con el signo de ? podemos setear cuando un parametro es opcional
  const createProductJsonV2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  ) => {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  };

  const producto2 = createProductJsonV2("P2", new Date(),12);
  console.log(producto2);
  console.log(producto2.title);
  console.log(producto2.stock);
  console.log(producto2.size); //en este caso devolvera undefined 

})();
