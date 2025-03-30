// Code your solutions in this file
// Function to generate thank you messages
function writeCards(names, event) {
    let messages = []; 
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
  
    return messages; 
  }
  
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--; 
    }
  }
  
  console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"));
 
  
  countDown(4);

  
  countDown(10);
  