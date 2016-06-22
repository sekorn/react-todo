// function add(a, b) {
//   return a + b;
// }
//
// console.log(add(3,1))
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var groupA = ['scott', 'brad'];
// var groupB = ['vikram'];
//
// var finalA = [3, ...groupA];
//
// console.log(finalA);

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

function greeting(name, age) {
  console.log('Hi ' + name + ', you are ' + age);
}

greeting(...person);
var names = ['Mike', 'Ben'];
var final = [...names, 'Scott'];

final.forEach(function (name) {
  console.log('Hi ' + name);
});
