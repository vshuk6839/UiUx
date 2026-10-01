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


  
    
 
