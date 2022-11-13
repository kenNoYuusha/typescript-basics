/*
    Transpilar ts a js sin archivo de configuracion

    --por default transpila a es3
    npx tsc ./src/*.ts

    --especificando version de EcmaScript
    npx tsc ./src/*.ts --target es6

    --especificando ubicacion destino del archivo transpilado
    npx tsc ./src/*.ts --target es6 --outDir ./dist/

*/

const myName = "Jorge Luis";
console.log(myName);
