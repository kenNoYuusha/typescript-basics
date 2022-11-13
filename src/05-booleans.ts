(()=> {
    //implicita o inferida
    let isEnable = true;
    // iEnable = 'as';   is not allowed
    // isEnable = 1212   is not allowed
    isEnable = false;

    //explicita
    let isNew: boolean = false;
    console.log('isNew', isNew);
    isNew = true;
    console.log('isNew', isNew);

    const random = Math.random();
    console.log('random', random);

    //asignacion indirecta, tiene que ser tipo boolean en este ejemplo.
    isNew = random >= 0.5 ? true : false;
    console.log('isNew', isNew);

    const myBoolean: boolean = true;
    //no usar el tipado de la clase Boolean
    

})();