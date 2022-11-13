(() => {
  //los union types sirven para hacer un mixin de tipados especificos a una variable.
  //mejor opcion al any porque sirve para acortar los tipos permitidos.

  let userId: string | number;
  userId = 1212;
  userId = "asasas";

  //al momento de haber 2 tipos para una misma variable, con condicionales podemos tratar cada tipo de variable dependiendo que valor tenga la misma.
  //y asi podeer obtener la ayuda del editor de los metodos de acuerdo al tipo.
  function greeting(myText: string | number) {
    if (typeof myText === "string") {
      console.log(`string ${myText.toLocaleLowerCase()}`);
    } else {
      console.log(`number ${myText.toFixed(1)}`);
    }
  }
  greeting("Jorge LuiS");
  greeting(12.5454878712);

  const publish = (publish: string | number): string | number => {
    let response: string | number =
      typeof publish === "string"
        ? publish.toLocaleLowerCase()
        : publish.toFixed(2);

    return response;
  };

  console.log("trying number", publish(3.14163545654));
  console.log("trying string", publish("PaRangaRiCutirimicuaRO"));
})();
