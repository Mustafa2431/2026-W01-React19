/*
re-declaration and re-assignment in JavaScript for var and global scope

*/
var X = 10;
var X = 20;
console.log("X = "+X); // 20

/*

only re-assignment is allowed for let, but not re-declaration since it is block-scoped

*/
let Y = 10;
// let Y = 20; // SyntaxError: Identifier 'Y' has already been declared
console.log("Y = "+Y); // 10

/*

no re-declaration and no re-assignment is allowed for const
*/
const Z = 10;
// Z = 20; // TypeError: Assignment to constant variable.
console.log("Z = "+Z); // 10