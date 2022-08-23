//refactor the following into arrow functions (uses 2)
function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
}

const timesTwo = arr => arr.map(n => n*2);





//refactor the following into arrow functions
function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
}

const squareAndFindEvens2 = nums => nums.map(n => n*n).filter(sqr => sqr%2 === 0);

console.log(squareAndFindEvens([1,2,3,4,5,6,7,8,9]));
console.log(squareAndFindEvens2([1,2,3,4,5,6,7,8,9]));