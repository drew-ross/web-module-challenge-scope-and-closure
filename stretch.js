console.log("STRETCH --------------------");

// Stretch 1

(function () {
    var a = b = 3;
})();
console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));

// A:
// The reason var a = b = 3 shows that a is undefined while b is defined, is because the var keyword only works on a, therefore a is declared as follows:
// var a = b
// But b does not use the var keyword, and is instead declared as:
// b = 3
// Because no keyword is used, b is declared as a global variable and is therefore accessible outside of the function. a is function-scope, and is not accessible outside of the function, where console.log is being used.


// Stretch 2

function createBase(base) {
    return function add(num) {
        return num + base
    }
}

var addSix = createBase(6);
console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27


// Stretch 3

// Research the differences between functional programming and object oriented programming. Then, describe the pros and cons of functional programming vs object-oriented programming.

// A:
// Functional programming is a method where the program is mostly made of constant variables and functions being passed into and returned by functions. Functions should not access data that is not passed to it by an argument, and should not mutate data directly, but should return new data instead.

// Object-oriented programming is a method where the program is made of objects. A class defines how an object should be constructed. Objects are individual instances of a class and contain methods and properties. The objects are made to interact with other objects via their methods and modify their properties, which hold all the relevant data for the program.