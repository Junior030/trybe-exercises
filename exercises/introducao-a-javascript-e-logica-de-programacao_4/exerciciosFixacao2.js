let cars = ["Saab", "Volvo", "BMW"];

for (let i in cars) {
  console.log(cars[i]);
}

let car = {
    type: "Fiat",
    model: "500",
    color: "white",
  };
  
  for (let i in car) {
    console.log(i, car[i]);
}
console.log(" ");

let fruits = ["Apple", "Banana", "Orange"];
for (let key in fruits ) {
  console.log(fruits[key]);
}