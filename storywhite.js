// Ask for the player's name and store it
playerName = prompt("What is your name?");

// Greet the player
alert("Hello, " + playerName + "! " + introText);

// First decision point
let pathChoice = prompt(pathText1 + " (Type 'left' or 'right')").toLowerCase();

// Check the player's choice for the first decision
if (pathChoice === "left") {
  alert(endText1);
  score += 10; // Player earns points for a peaceful journey
} else if (pathChoice === "right") {
  alert(endText2);
  score -= 5; // Player loses points for encountering danger
} else {
  alert("Invalid choice! Please choose either 'left' or 'right'.");
  pathChoice = prompt(pathText1 + " (Type 'left' or 'right')").toLowerCase();
}

// Second decision point (if the first decision led to a certain outcome)
if (pathChoice === "left") {
  let caveChoice = prompt(pathText2 + " (Type 'enter' or 'walk away')").toLowerCase();

  if (caveChoice === "enter") {
    let chestChoice = prompt(pathText3 + " (Type 'open' or 'leave')").toLowerCase();

    if (chestChoice === "open") {
      alert(endText5);
      score += 20; // Player finds treasure and earns points
    } else {
      alert(endText4);
      score -= 10; // Player misses the treasure
    }
  } else if (caveChoice === "walk away") {
    alert(endText4);
    score -= 5; // Player walks away from an opportunity
  } else {
    alert("Invalid choice! Please choose either 'enter' or 'walk away'.");
    caveChoice = prompt(pathText2 + " (Type 'enter' or 'walk away')").toLowerCase();
  }
} else {
  alert("You didn't choose the left path, no further decisions.");
  score -= 10; // No more choices, lost opportunity
}

// Final outcome
alert("Your adventure is over. Your final score is: " + score);

// Show different ending based on score
if (score >= 30) {
  alert("Congratulations, " + playerName + "! You're a true hero with a high score!");
} else if (score >= 10) {
  alert("Nice job, " + playerName + ". You had an interesting adventure!");
} else {
  alert("Better luck next time, " + playerName + ". It looks like your adventure was a little rough!");
}