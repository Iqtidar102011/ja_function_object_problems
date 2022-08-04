// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd.

function odd_even(num) {
    if (num % 2 == 0) {
        return "Even";
    }
    else {
        return "odd";
    }

}
console.log(odd_even(5));

