function test() {
  if (true) {
    var x = 10; // function scope
    let y = 20; // block scope
  }
  console.log(x); // ✅ 10
  console.log(y); // ❌ ReferenceError
}
test();
