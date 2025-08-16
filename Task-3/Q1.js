//1.Difference Between let,const, and var

// var
var a = 10;
var a = 20; // ✅ redeclared
console.log(a); // 20

// let
let b = 30;
// let b = 40; ❌ Error: Cannot redeclare
b = 40; // ✅ reassigned
console.log(b); // 40

// const
const c = 50;
// c = 60; ❌ Error: cannot reassign
console.log(c); // 50

