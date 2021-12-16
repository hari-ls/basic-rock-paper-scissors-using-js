// Rock, Paper, Scissors
// initialise input choices
var choices = ["R", "P", "S"]; // array
var stats = {
  wins: 0,
  losses: 0,
  draws: 0,
  user: 0,
  computer: 0,
}; // object
var userChoice,
  computerChoice,
  result,
  board,
  go = true;

// ask user for input
var getUserChoice = function () {
  userChoice = window.prompt("Select one: 'R', 'P' or 'S'").toUpperCase();
};
// validate input
var checkInput = function (input) {
  if (input === "R" || input === "P" || input === "S") {
    return true;
  } else {
    return false;
  }
};
// gameplay
var game = function (userSlected) {
  console.log("user", userSlected);
  // let computer choose
  computerChoice = choices[Math.floor(Math.random() * choices.length)];
  console.log("computer", computerChoice);
  // fetch outcome
  getOutcome(userSlected, computerChoice);
  // prompt for continuation
  if (window.confirm("Do you want to continue playing?")) {
    go = true;
  } else {
    go = false;
  }
};
//compare choices
// if = then draw (3)
//
// if R && S then win, if P && R then win, if S && P then win
//
// if S && R then loose, if R && P then loose, if P && S then loose
//
var getOutcome = function (user, computer) {
  if (user === computer) {
    console.log("Draw!");
    stats.draws++;
    result = window.alert("Draw!");
  } else if (
    (user === "R" && computer === "S") ||
    (user === "P" && computer === "R") ||
    (user === "S" && computer == "P")
  ) {
    console.log("User wins!");
    stats.wins++;
    result = window.alert("User wins!");
  } else {
    console.log("Computer wins!");
    stats.losses++;
    result = window.alert("Computer wins!");
  }
};
// get user choice
// check if valid
// proceed
// if not valid
// get user choice
while (go) {
  getUserChoice();
  if (checkInput(userChoice)) {
    game(userChoice);
  }
}
// display stats
board =
  "Wins: " +
  stats.wins +
  "\nLosses: " +
  stats.losses +
  "\nDraws: " +
  stats.draws +
  "\nUser: " +
  stats.user +
  "\nComputer: " +
  stats.computer;
window.alert(board);
