(() => {
    //tipado de forma inferida, en este caso acepta tipo nubmer string y boolean.
    let prices = [1,2,3,4,5,6, 'hola', true];

    
    //tipado explicito
    let product: (string | number | boolean)[];
    product = ["hola", true];

    

})();