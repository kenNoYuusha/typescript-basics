(() => {

    //al especificar el tipo de retorno, ya no lo infiera la funcion, y obliga a retornar el tipo especificado
  const calcTotal = (prices: number[]):string => {
    let total: number = 0;
    prices.forEach((item) => {
      total += item;
    });
    return total.toString();
  };

  const rta = calcTotal([1, 2, 3, 4, 5]);
  console.log("rta", rta);

  //por si quiero especificar que la funcion no retorne algun valor se tipa con :void

  const printTotal = (prices: number[]):void => {
    const rta = calcTotal(prices);
    console.log(`El total es ${rta}`);
  }

  printTotal([1,2,3,4,5]);

})();
