(() => {
  let producTitle = "My amazing product";
  producTitle = "My amazing product changed";
  console.log("productTitle", producTitle);

  const productDescription: string =
    "some description about the product.alks kajsfdklasd";

  let productPrice = 100;
  let isNew: boolean = false;

  //back tick
  const summary = `
     title: ${producTitle}
     description: ${productDescription}
     price: ${productPrice}
     isNew: ${isNew}
    `;
  console.log("summary", summary);
})();
