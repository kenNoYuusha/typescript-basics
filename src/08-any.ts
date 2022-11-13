(() => {
    //se vuelve flexible y se puede convertir en cualquier tipo de variable,
    //tratar de evitar a toda costa, usado solo para hacer migraciones de js a ts y hacerlas un poco mas soft.
    let myDynamicVar: any;
    myDynamicVar = 12;
    myDynamicVar = 'text';
    myDynamicVar = true;
    myDynamicVar = [];
    myDynamicVar = {};

    myDynamicVar = 'Hola';

    //haciendo un cast de any a string.
    const rta = (myDynamicVar as string).toLocaleLowerCase();
    console.log('rta', rta);
    //haciendo un cast de any a number.
    myDynamicVar = 1212;
    const rta2 = (<number>myDynamicVar).toFixed();
    console.log('rta2', rta2);

})();