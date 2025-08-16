function test() {
  if (true) {
    var x = 10; // function scope
    let y = 20; // block scope
  }
  console.log(x);  
  console.log(y); 
}
test();
