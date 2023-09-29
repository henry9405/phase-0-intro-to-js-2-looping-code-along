// Code your solutions in this file
// for (let age =30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger;
// }
// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);

// function writeCards(names, occasion) {
//     // Step 1: Create a new, empty array to hold the messages
//     const messages = [];
  
//     // Step 2: Iterate through the input array and build out the 'thank you' message
//     for (const name of names) {
//       const message = `Thank you, ${name}, for the wonderful ${occasion} gift!`;
//       // Add the message to the new array
//       messages.push(message);
//     }
  
//     // Step 3: Return the new array
//     return messages;
//   }
  
//   // Example usage:
//   const messages = writeCards(["Charlie", "Samip", "Ali"], "birthday");
//   console.log(messages);
  
//   function countdown(number) {
//     for (let i = number; i >= 0; i--) {
//       console.log(i);
//     }
//   }
  
//   // Example usage:
//   countdown(5); 

function writeCards(names, occasion) {
    let messages = []; // Step 1: Create a new empty array to hold the messages
  
    for (let i = 0; i < names.length; i++) {
      let message = `Thank you, ${names[i]}, for the wonderful ${occasion} gift!`; // Step 2: Build the 'thank you' message
      messages.push(message); // Add the message to the new array
    }
  
    return messages; // Step 3: Return the new array with messages
  }
  
  function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i); // Log each number when counting down
    }
  }
  
  // Example usage:
  const messages = writeCards(["Charlie", "Samip", "Ali"], "birthday");
  console.log(messages);
  
  countDown(5); // This will log numbers from 5 to 0
  