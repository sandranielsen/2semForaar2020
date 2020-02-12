/**
 * file: js.js
 * purpose: objects in practise
 * with inspiration from: https://www.w3schools.com/js/js_this.asp
 **/

// Create an object:
let person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName += " " + this.lastName;
    }
};

let myHair = {
    color: "Brown",
    length: "Short",
    texture: "Curly",
    style: "Natural",
    thickness: "Thick",
    health: "Slightly Damaged",
    volume: "Voluminous",
    image: "greenman.jpg",
    colorAndLength: function () {
        return this.color + " and " + this.length;
    },
    showImage: function () {
        return '<img src="../images/' +
            this.image + 
            '" alt="the alt text">';
    }
}

/*
Note: the object is person. The object has properties, such e.g. firstName. The object also has a method, in this case fullName. The keyword "this" refers "to the owner object" (quote from W3 schools).
*/

// Display data from the object:

document.getElementById("demo").innerHTML = person.fullName();

document.getElementById("demo").innerHTML = myHair.color;

document.getElementById("demo").innerHTML += '<br>' + myHair.length;

document.getElementById("demo").innerHTML += '<br>' + myHair.texture;

document.getElementById("demo").innerHTML += '<br>' + myHair.style;

document.getElementById("demo").innerHTML += '<br>' + myHair.thickness;

document.getElementById("demo").innerHTML += '<br>' + myHair.health;

document.getElementById("demo").innerHTML += '<br>' + myHair.volume;


// Here's an alternative way to do the above 
let aa = document.getElementById("demo");

aa.innerHTML += '<br><br>' + myHair.colorAndLength();
aa.innerHTML += '<br>' + myHair.showImage();




/* Alternative: call */

/*
The Call Method:
let person2 = {
  firstName:"John",
  lastName: "Doe",
}
person1.fullName.call(person2);  // Will return "John Doe"
*/

/* ---------- INSTANCE ---------- */

/*

function Course(name, gradingareas, finalgrade) {
    this.name = name;
    this.gradingareas = gradingareas;
    this.finalgrade = finalgrade;
}

var course1 = new Course("CS1500", "Js", 85);
var course2 = new Course("CS1600", "Whot", 99);
console.log(course2.name); // CS1600

*/
