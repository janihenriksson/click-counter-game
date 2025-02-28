//PSEUDOCODE
//BEGIN
    // Create the HTML structure
    // DISPLAY <h1> element with title
    // DISPLAY two <p> elements with some text
    // DISPLAY a button labeled "Click Me"
    // DISPLAY a counter with initial value 0

    // Initialize variables
    // SET clickCount to 0

    // Define button click event
    // WHEN button is clicked:
    // INCREMENT clickCount by 1
    // UPDATE counter display with clickCount
    // STORE clickCount in local storage

    // Load stored clicks on page refresh
    // WHEN page loads:
    // RETRIEVE clickCount from local storage
    // IF clickCount exists:
    // UPDATE counter display with stored clickCount
//END

const button = document.querySelector("#clicker");
const clickCount = document.querySelector("#counter");
const clearScore = document.querySelector("#restart");

let count = 0;

button.addEventListener("click", () => {
    console.log("Button clicked!")
    count++;
    // console log not working --> why? console.log(count);
    clickCount.textContent = count;
});

clearScore.addEventListener("click", () => {
    console.log("Restart button clicked!");
    count = 0;
    clickCount.textContent = count;
});