const obj1 = { name: "Macha" };
Object.freeze(obj1);
obj1.name = "Changed"; 
obj1.age = 25;         
console.log(obj1);     

const obj2 = { name: "Bro" };
Object.seal(obj2);
obj2.name = "Changed"; 
obj2.age = 25;         
delete obj2.name;      