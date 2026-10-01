console.log("script.js is connected");


function handleRSVP() {
  const rsvpButton = document.getElementById("rsvpBtn");

  if (document.querySelector(".feedback-message")) {
    return;
  }

  const message = document.createElement("p");
  message.textContent = "You're on the list — see you there!";
  message.classList.add("feedback-message");

  rsvpButton.after(message);
}




  let count = 0;


function countOne() {
  count +=1;
  console.log(count)
  let countOne = document.getElementById("rsvpCount");
  countOne.innerHTML= count;

}



//  I used a dom element instead of using a alert element because it styled, accessible modal, or log messages to the console and update DOM elements for feedback

// when a user clicks a button in my webpage it sends a message to my code in  Script.Js that incress a number by one. 


//  one interactive element that I built in my webpage in "createElement" 
  
    
 
