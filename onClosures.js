function multiplier(factor) {
    return number => number * factor;  // this returns an arrow function
}

// rewrite the function, without using arrow notation, to make the concept more visible
function multiplier2(factor) {
    return function(number) {
        return number * factor;
    }
}

let twice = multiplier(2);
console.log(`twice is ${twice}`);
console.log(twice(5));

let twice2 = multiplier2(3);
console.log(twice2(6));

/* 
using the debuger
let twice  // twice is undefined
 =multiplier(2) // -> factor: 2
 now twice is: number => number * 2
 on console.log(twice(5)), number is binded to 5, and we get 5 * 2

*/