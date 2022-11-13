(() => {
  //sin alias
  let userId: string | number | boolean = "CualquierCoSa";

  function greeting(userId: string | number | boolean) {
    if (typeof userId === "string") {
      console.log(`string ${userId.toLocaleLowerCase()}`);
    }
  }
  greeting(userId);
  //con alias
  //palabra reservada type nombre en pascal case = tipos asiganar
  type UserID = string | number;
  let userId2: UserID = "Otra Cosa Diferente";

  function greeting2(userId: UserID) {
    if (typeof userId === "string") {
      console.log(`string ${userId.toLowerCase()}`);
    }
  }
  greeting2(userId2);

  // Literal types sin alias;

  let shirtSize: 'S' | 'M' | 'L' | 'XL' | 14;
  shirtSize = "XL";
  shirtSize = 14;
  //cualquier otro valor que no este difinido saltara un error

  // Literal types con alias;

  type Sizes = 'S' | 'M' | 'L' | 'XL' | 12;
  let skirtSize: Sizes;
  skirtSize = 12;
  skirtSize = "XL";
  // igual que en el ejemplo anterior solo se pueden usar las opciones previamente fijadas.
 
  function greeting3(userId: UserID, size: Sizes) {
    if (typeof userId === "string") {
      console.log(`string ${userId.toLocaleLowerCase()}`, `talla ${size}`);
    }
  }
  greeting3("algo", 'S')
})();
