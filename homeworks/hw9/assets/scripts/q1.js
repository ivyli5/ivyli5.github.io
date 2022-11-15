
//
// Part 1: Code setBackgroundColor() so the background color of #q1-container changes to the color specified
//

/**
 * Sets the background color of #q1-container
 *
 * @param {string} color The background color that #q1-container should change to
 */
function setBackgroundColor(color) {
    // TODO: Get the element with the id "q1-container" and set its background color to the input color
    document.getElementById('q1-container').style.background = color




}

//
// Part 2: Code the function redButtonClicked() and make the browser run the function for you when #q1-btn-red is clicked
//
function redButtonClicked() {
    setBackgroundColor("#EF476F")
}

// For the red button
// Use the color #EF476F, or change it up to your liking
// If you do decide to change the color, probably also consider updating the corresponding button color in CSS :)

/**
 * Handler function that the browser should run when the red button is clicked
 */
function redButtonClicked() {
    // TODO: Use the setBackgroundColor() to set the background color to #EF476F (or another color of your choice)
    setBackgroundColor("#EF476F")




}

// This gets the element with id "q1-btn-red" and sets the browser to run the function redButtonClicked() when someone clicks the element
document.getElementById("q1-btn-red").onclick = redButtonClicked;

// After you finish part 1 & 2, the clicking the red button should turn the background color red!

//
// Part 3: Program the yellow button similar to what you did with the red button
//
function yellowButtonClicked() {
    setBackgroundColor("#FFD166")
}
document.getElementById("q1-btn-yellow").onclick = yellowButtonClicked;
// For the yellow button
// Use the color #FFD166, or change it up to your liking

// TODO: Define a function like yellowButtonClicked() that sets the background color





// TODO: Set the browser to run the function yellowButtonClicked() when someone clicks #q1-btn-yellow





//
// Part 4: A little more practice, let's do the same for the rest of the buttons
//
function greenButtonClicked() {
    setBackgroundColor("#06D6A0")
}
document.getElementById("q1-btn-green").onclick = greenButtonClicked;
// For the green button
// Use the color #06D6A0, or change it up to your liking

// TODO: Make the green button work similarly





// For the light blue button
// Use the color #118AB2, or change it up to your liking
function lightblueButtonClicked() {
    setBackgroundColor("#118AB2")
}
document.getElementById("q1-btn-lightblue").onclick = lightblueButtonClicked;
// TODO: Make the light blue button work similarly





// For the blue button
// Use the color #073B4C, or change it up to your liking
function blueButtonClicked() {
    setBackgroundColor("#073B4C")
}
document.getElementById("q1-btn-blue").onclick = blueButtonClicked;
// TODO: Make the blue button work similarly
