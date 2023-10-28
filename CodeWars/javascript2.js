/*
Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

[Make sure you type the exact thing I wrote or the program may not execute properly]

https://www.codewars.com/kata/55a70521798b14d4750000a4

*/


function greet(name) {
    return `Hello, ${name} how are you doing today?`;
  }
  
  const name = "John"; // Replace "John" with the name you want to greet
  const greeting = greet(name);
  console.log(greeting);


  /* OR */
  
  function generateGreeting(name2) {
    return `Hello, ${name2} how are you doing today?`;
  }
  
  let inputName = prompt("Please enter your name:");
  
  // Continue to prompt the user until a non-empty name is provided
  while (inputName === null || inputName.trim() === "") {
    inputName = prompt("Please enter a valid name. Your name cannot be empty: ");
  }
  
  const greeting2 = generateGreeting(inputName);
  console.log(greeting2);
  
