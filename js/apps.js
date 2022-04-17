'use strict';
alert("Please enter all the required spaces");
var username = prompt("Give me your name please");
console.log(username);


var female;
var male;
var gender = prompt("Give me your gender please");
console.log(gender);


var Age = prompt("Give me your Age please");
console.log(Age);

if (Age <= 0) {
  prompt("please enter age again");
};



var useranswer = confirm(" want to skip the welcoming message?");

if (useranswer == true) {
  if (gender === "female" &&
    Age > 0) {
    alert("hello " + username);
  } else if (gender === "male" &&
    Age > 0) {
    alert("hello " + username);
  }
} else {
  if (gender === "female" &&
    Age > 0) {
    alert("hello Ms " + username);
  } else if (gender === "male" &&
    Age > 0) {
    alert("hello Mr " + username);
  }

}