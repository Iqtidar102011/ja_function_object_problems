// Write a function called make_avg() which will take an three integers and return the
// average of those values.

function make_avg(num1, num2, num3) {
    var sum = num1 + num2 + num3;
    var avg = sum / 3;
    return avg;
}
var result = make_avg(2, 5, 2);
console.log(result);