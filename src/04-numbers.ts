(() => {
  let productPrice = 100;
  productPrice = 12;
  console.log("productPrice", productPrice);

  let customerAge: number = 28;
  //customerAge = customerAge + '1'; // 281
  customerAge = customerAge + 1;
  console.log("customerAge", customerAge);

  //cuando solo se declara la varibale obligadamente debe tiparse.
  let productInStock: number = 20;
  console.log("productInStock", productInStock);

  if (productInStock > 10) {
    console.log("is greater");
  }
  //verificar que el string sea un numero, porque retornaria NaN, y solo se reflejaria el error al momento de ejecucion.
  let discount = parseInt("100");
  console.log("discount", discount);

  if (discount <= 200) {
    console.log("apply");
  } else {
    console.log("not apply");
  }

  let hex = 0x00f;
  console.log("hex", hex);

  let bin = 0b1010;
  console.log("binario", bin);

  //no tiparlo con el objecto Number, sino con el tipo primitivo number
  //const myNumber: Number= 10;
  const myNumber: number = 10;
  console.log("myNumber", myNumber);
})();
