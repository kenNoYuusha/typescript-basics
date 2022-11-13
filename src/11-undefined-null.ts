(() => {

    //let myNumber: number;
    //let myString: string;

    //no se puede asignar null y undefined con inferencia de datos, tiene que hacerse de manera explicita.
    let MiNulo = null;
    let MiIndefinido = undefined;

    let myNull: null = null;
    let myUndefined: undefined = undefined;

    //usarse si sabemos que en algun momento la variable sera null o undefined antes de asignarle algun otro tipo de valor
    let myNumber: number | null = null;
    myNumber = 12;

    let myString: string | undefined = undefined;
    myString = 'aas';

    function hi(name: string | null) {
        let hello = "Hola ";
        hello += name?.toLowerCase() || 'nobody';
        console.log(hello);
    }
    
    hi("Jorge");
    hi(null);

})();