let loginPwdStatus = false;

function changePwdView() {
  let getLoginInput = document.getElementById("loginPwdChange");

  if (loginPwdStatus === false) {
    getLoginInput.setAttribute("type", "text");
    loginPwdStatus = true;
  } else if (loginPwdStatus === true) {
    getLoginInput.setAttribute("type", "password");
    loginPwdStatus = false;
  }
}

let hamburger = document.querySelector(".hamburger");
hamburger.onclick = () => {
  let navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
};

//Array  pop,push,shift,unshift,toString,join,splice,slice,length,delete,concat,map,filter,reduce,sort and reverse.

// const Array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const arrayMap = Array.map((num) => {
//   return num + 2;
// });

// console.log("Map", arrayMap);

// const arrayFilter = Array.filter((num) => {
//   return num < 5;
// });

// console.log(arrayFilter);

// const arrayReduce = Array.reduce((acc, num) => {
//   return acc + num;
// }, 5);
// console.log(arrayReduce);

// const fruit = ["Mango", "Orange", "Apple", "Cashew"];
// const Arr = ["Ade", "Gray", "Doe", "John"];
// fruit.pop();
// fruit.push("Cashew");
// document.getElementById("fruits").innerHTML = fruit.toString();
// document.getElementById("fruits").innerHTML = fruit.join();
// fruit.splice(2, 0, "bread", "beans");
// fruit.splice(0, 1);
// fruit.splice(1);
// document.getElementById("fruits").innerHTML = fruit.concat(Arr);

// console.log(fruit);

//instantiation (Object destructure)

// class Player {
//   constructor(name, type) {
//     this.name = name;
//     this.type = type;
//   }
//   introduce() {
//     console.log(`Hi, i am ${this.name} and i am ${this.type}`);
//   }
// }

// class Wizard extends Player {
//   constructor(name, type) {
//     super(name, type);
//   }
//   play() {
//     console.log(`I am a ${this.type}`);
//   }
// }

// const wizard1 = new Wizard("James", "Thief");

// wizard1.play();

//OBJECT

// const person = {
//   firstName: "James",
//   lastName: "Joy",
//   Age: 20,
//   gender: "Male",
// };

// console.log(
//   `I am ${person.firstName} ${person.lastName} and i am ${person.Age} years old`
// );

// document.getElementById(
//   "fruits"
// ).innerHTML = `I am ${person.firstName} ${person.lastName} and i am ${person.Age} years old`;

// class Person {
//   constructor(firstName, lastName, Age, gender) {
//     Person.firstName = firstName;
//     Person.lastName = lastName;
//     Person.Age = Age;
//     Person.gender = gender;
//   }
//   greetings() {
//     console.log(
//       `Hello ${Person.firstName} ${Person.lastName}, you are ${Person.Age} years old and you are a ${Person.gender}.`
//     );
//   }
// }
// const Person1 = new Person("James", "Joy", 20, "Male");

// Person1.greetings();

// class Player extends Person {
//   constructor(firstName, lastName, Age, gender) {
//     super(firstName, lastName, Age, gender);
//   }
//   player() {
//     console.log(
//       `Hello ${Person.firstName} ${Person.lastName}, I am a new player, I am ${Person.Age} years old and I am a ${Person.gender}.`
//     );
//   }
// }

// const player1 = new Player("John", "Doe", 25, "Female");

// player1.player();

// const person = {
//   firstName: "James",
//   lastName: "Joy",
//   Age: 20,
//   gender: "Male",
//   fullName: () => {
//     return person.lastName + " " + person.firstName;
//   },
// };

// let { firstName, lastName, fullName, gender } = person;

// console.log(gender, fullName());
