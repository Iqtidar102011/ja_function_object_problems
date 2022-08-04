// // function doTask() {
// //     console.log("task 1");
// //     console.log("task 2");
// // }
// // doTask();

// function sum(a, b, c, d) {
//     var sum = a + b + c + d;
//     console.log(sum);
// }
// sum(1, 2, 3, 4);


// function buyBook(money) {
//     var bookPrice = 10;
//     var quantity = money / bookPrice;
//     return quantity;
// }
// var amount = 300;
// var books = buyBook(amount);
// console.log("number of books", books);


function add(num1, num2) {
    var sum = num1 + num2;
    return sum;
}
var result1 = add(15, 20);
var result2 = add(10, 20);
var total = add(result1, result2);
console.log(total);

function test() {
    return 25;
}
console.log(test());