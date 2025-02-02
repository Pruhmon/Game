// Global variables to store the player's name and score
let playerName = "";
let score = 0;

// Introduction text
const introText = "Welcome to the Ultimate Adventure Game! Your decisions will determine the outcome, so choose wisely!";

// Path choices
const pathText1 = "You come across a fork in the road. Do you want to go left or right?";
const pathText2 = "You find a mysterious cave. Do you want to enter or keep walking?";
const pathText3 = "You discover a treasure chest. Do you want to open it or leave it alone?";

// Consequences
const trapText = "Oh no! You fell into a trap! Your score drops by 10.";
const treasureText = "Congrats! You found treasure! Your score increases by 20.";

// Endings
const endText1 = "You went left and found a village. It was peaceful, but you missed out on something exciting!";
const endText2 = "You went right and faced a dangerous wild animal. Unfortunately, the animal attacked you.";
const endText3 = "You entered the cave and found hidden treasure! You’re the hero of this story!";
const endText4 = "You walked away from the cave, missing the treasure. Your journey ends here. Rest in peace.";
const endText5 = "You opened the chest and found gold and jewels! You’re rich!";

// Exporting the variables (if using modules)
if (typeof module !== "undefined") {
    module.exports = {
        playerName,
        score,
        introText,
        pathText1,
        pathText2,
        pathText3,
        trapText,
        treasureText,
        endText1,
        endText2,
        endText3,
        endText4,
        endText5
    };
}