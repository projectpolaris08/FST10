// Display content to the console
console.log("Hello World!");

/*
Multi-line coment
I have a ton of code 
that I forgot 
and this is a reminder of that code
*/

// Variables

// camelCase: Capitalize the letter of each word, except the first one

// let - mutable/changeable - block scope
// var - mutable/changeable - global scope
// const - unmutable/unchangeable - block scope

let firstName = "Name";
firstName = "I changed the name";
console.log(firstName);

var anotherName = "Another Name";
anotherName = "I changed another name";
console.log(anotherName);

const myName = "Joshua";
// myName = "Jake"; // cannot change const variable
console.log(myName);

// Scope
// global and local scope
// Blocks
// () - condition block
// {} - code block

{
    let username = "Anonymous";
    var email = "anonymousemail@email.com";
    console.log(username);
}
console.log(email);