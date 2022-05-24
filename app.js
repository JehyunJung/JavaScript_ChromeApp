const a = 5;
const b = 2;
console.log(124124);
console.log("hello");
alert(a + b);

const c = null;
let d;

console.log(c, d);

const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const daysOfWeek = [mon, tue, wed, thu, fri, sat, sun];
console.log(daysOfWeek);
console.log(daysOfWeek[2]);

daysOfWeek.push("tmp");

const player = {
  name: "test",
  age: 24,
  address: "seoul",
  phone: "010-1234-1234",
  sayhello: function () {
    console.log("hello My name is" + player.name);
  },
};
player.major = "CS";

function sayHello(name) {
  return "Hello" + name;
}

console.log(sayHello("temp"));

const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  powerof: function (a, b) {
    return a ** b;
  },
};

let age = parseInt(prompt("How Old Are You?"));

alert("Oh you are " + age + " years old");

console.log(isNaN(age));

if (age > 18) {
  console.log("You are old enough to drink");
} else {
  console.log("You are too young");
}
