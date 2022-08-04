
// looping through an object---------

var shoppingCart = {
    bag: 1,
    books: 3,
    shirt: 2,
    pant: 3,
    shoes: 5,
}
// to get the property names
const keys = Object.keys(shoppingCart);
// console.log(keys);
// to get the values 
const values = Object.values(shoppingCart);

// -------------looping--------
// keys = [ 'bag', 'books', 'shirt', 'pant', 'shoes' ]


for (var i = 0; i < keys.length; i++) {
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
    console.log(propertyName, propertyValue);
}
// ------by for in loop-----------
for (var propertyName in shoppingCart) {
    const value = shoppingCart[propertyName];
    console.log(propertyName, value);
}