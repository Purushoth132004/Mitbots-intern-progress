const person = { name: "Rahul" };
function greet(age, city) {
  console.log(`Hi I'm ${this.name}, ${age} from ${city}`);
}

greet.call(person, 25, "Chennai");
greet.apply(person, [30, "Bangalore"]);
const bound = greet.bind(person, 28, "Hyd");
bound();
