let arr = ["a", "b", "c"];

for (let i in arr) {
  console.log("for...in:", i); // 0, 1, 2
}

for (let val of arr) {
  console.log("for...of:", val); // a, b, c
}
