// Exporting module
console.log("Exporting module");

const shippingCost = 10;

// export the variable shippingCost to be used in other modules

export { shippingCost as cost };

// export multiple variables

const cart = [],
  totalprice = 237;

export { cart as car, totalprice as price };

// export functions

export const addToCart = (product, quantity) => {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};
