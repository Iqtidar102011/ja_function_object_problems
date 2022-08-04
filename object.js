var shoppingCart = {
    bag: 1,
    books: 3,
    shirt: 2,
    pant: 3,
}
console.log(shoppingCart);

// to access a known specific property value
console.log(shoppingCart.books);
// --------------------------------------

// alternative:to access a known specific property value
console.log(shoppingCart["pant"]);
// --------------------------------------------

//  another way to get access to property value
var propertyName = "pant";
var propertyValue = shoppingCart[propertyName];
console.log(propertyName, propertyValue);
// -------------------------------------------------

// to get all he property names as an array
var property = Object.keys(shoppingCart);
console.log(property);
// ----------------------------------------

// to get all he property values as an array
var propertyValues = Object.values(shoppingCart);
console.log(propertyValues);
// ----------------------------------------------------------

// set properties value (method1)-------------------------------
shoppingCart.bag = 2;
console.log(shoppingCart);

// method2 ...............
shoppingCart["pant"] = 4;
console.log(shoppingCart);
// method3............
var propertyName = "bag";
shoppingCart[propertyName] = 5;
console.log(shoppingCart);
