// Ask for the player's name and store it
let playerName = prompt("What is your name?").trim();

// Ensure the player enters a valid name
while (!playerName) {
  playerName = prompt("Please enter a valid name:");
}

// Greet the player
alert("Hello, " + playerName + "! " + introText);

// First decision point
let pathChoice = prompt(pathText1 + " (Type 'left' or 'right')").toLowerCase().trim();

// Validate first decision
while (pathChoice !== "left" && pathChoice !== "right") {
  pathChoice = prompt("Invalid choice! Please choose either 'left' or 'right'.").toLowerCase().trim();
}

// Process first decision
if (pathChoice === "left") {
  alert(endText1);
  score += 10; // Player earns points for a peaceful journey

  // Second decision point
  let caveChoice = prompt(pathText2 + " (Type 'enter' or 'walk away')").toLowerCase().trim();

  // Validate second decision
  while (caveChoice !== "enter" && caveChoice !== "walk away") {
    caveChoice = prompt("Invalid choice! Please choose either 'enter' or 'walk away'.").toLowerCase().trim();
  }

  if (caveChoice === "enter") {
    alert(endText3);
    score += 20; // Player finds treasure

    // Third decision point
    let chestChoice = prompt(pathText3 + " (Type 'open' or 'leave')").toLowerCase().trim();

    // Validate third decision
    while (chestChoice !== "open" && chestChoice !== "leave") {
      chestChoice = prompt("Invalid choice! Please choose either 'open' or 'leave'.").toLowerCase().trim();
    }

    if (chestChoice === "open") {
      alert(endText5);
      score += 20; // Player gets rich!
    } else {
      alert(endText4);
      score -= 10; // Missed treasure opportunity
    }
  } else {
    alert(endText4);
    score -= 5; // Walked away from treasure
  }
} else {
  // Player chose 'right'
  alert(endText2);
  score -= 5; // Encountered danger
}

// Final outcome
alert("Your adventure is over. Your final score is: " + score);

// Show different ending based on score
if (score >= 30) {
  alert("🎉 Congratulations, " + playerName + "! You're a true hero with a high score!");
} else if (score >= 10) {
  alert("👍 Nice job, " + playerName + ". You had an interesting adventure!");
} else {
  alert("😬 Better luck next time, " + playerName + ". It looks like your adventure was a little rough!");
}
