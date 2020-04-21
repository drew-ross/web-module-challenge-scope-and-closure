console.log("STRETCH --------------------");

(function () {
    var a = b = 3;
})();
console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));

// The reason var a = b = 3 shows that a is undefined while b is defined, is
// because the var keyword only works on a, therefore a is declared as follows:
// var a = b
// But b does not use the var keyword, and is instead declared as:
// b = 3
// Because no keyword is used, b is declared as a global variable and is therefore
// accessible outside of the function. a is function-scope, and is not accessible
// outside of the function, where console.log is being used.