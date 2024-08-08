console.log("Script running...")
// Task 1: Intro section
// Select the location button
let button = document.querySelector("#location")


// Select the empty p tag under the button
let p = document.querySelector("#locationText")

// Add an event listener on the location button such that when it is clicked, the text in the p tag is "1300 Boynton Ave (moving soon!)"
button.addEventListener("click", function(event){
  p.textContent = "1300 boynton ave"
})



// Task 2: Our Values section
// Select the h3 with S under "Our Values
   let c = document.querySelector("#score1")

// Add an event listener on the h3 such that when it is clicked, the text changes to "Self-Awareness"
c.addEventListener("click", function(event){
  p.textContent = "1300 boynton ave"
})


// Task 3: Uniform section
// Select the joggers image
let image = document.getElementById("joggers")

// Add an event listener on the image such that when it is clicked, the src becomes joggers-back.webp
  image.addEventListener("click", function(event){
 image.src = joggers-back.webp
})



// EXTRA CREDIT
// Set up the DOM manipulation flows for the rest of the SCORE values (consistency, ownership, resilience, excellent)




// Comment out the event listener in the uniform section and do the following instead
// Add an event listener on the image such that when the mouse is over it, the src becomes joggers-back.webp



// Add an event listener on the image such that when the mouse is off it, the src becomes joggers-front.webp




