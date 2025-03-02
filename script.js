function getComputerChoice() {
	const result = Math.floor(Math.random() *3);
	if (result === 0) {
		return ("rock");
	} else if (result === 1) {
		return ("paper");
	} else if (result === 2) {
		return ("scissors");
	}

}

function getHumanChoice() {
	let isvalid = false;
	let choice = "";
	
	while (!isvalid) {
		choice = prompt("Rock, Paper, or Scissors?");
		if (choice.toLowerCase() === "rock") {
			isvalid = true;
		} else if (choice.toLowerCase() === "paper") {
			isvalid = true;
		} else if (choice.toLowerCase() === "scissors") {
			isvalid = true;
		}
	}
	
	return (choice);	
}

function playRound(humanChoice, computerChoice) {
	if (humanChoice === "rock") {
		if (computerChoice === "scissors") {
			console.log("You win this round! Rock beats scissors!");
            alert("You win this round! Rock beats scissors!")
			return ("human");
		} else if (computerChoice === "paper") {
			console.log("You lose this round! Paper beats rock!");
            alert("You lose this round! Paper beats rock!");
			return ("computer");
		} else if (computerChoice === "rock") {
			console.log("Its a draw!");
            alert("Its a draw!");
			return ("draw");
		}
	} else if (humanChoice === "scissors") {
		if (computerChoice === "paper") {
			console.log("You win this round! Scissors beats paper!");
            alert("You win this round! Scissors beats paper!");
			return ("human");
		} else if (computerChoice === "rock") {
			console.log("You lose this round! Rock beats scissors!");
            alert("You lose this round! Rock beats scissors!");
			return ("computer");
		} else if (computerChoice === "scissors") {
			console.log("Its a draw!");
            alert("Its a draw!");
			return ("draw");
		}
	} else if (humanChoice === "paper") {
		if (computerChoice === "rock") {
			console.log("You win this round! Paper beats rock!");
            alert("You win this round! Paper beats rock!");
			return ("human");
		} else if (computerChoice === "scissors") {
			console.log("You lose this round! Scissors beats paper!");
            alert("You lose this round! Scissors beats paper!");
			return ("computer");
		} else if (computerChoice === "paper") {
			console.log("Its a draw!");
            alert("Its a draw!");
			return ("draw");
		}
	}
}

function playGame() {
	let humanScore = 0
	let computerScore = 0

	for (let i = 0; i < 5; i++) {
		const humanSelection = getHumanChoice();
		const computerSelection = getComputerChoice();

		let result = playRound(humanSelection, computerSelection);

		if (result === "human") {
			humanScore++;
		} else if (result === "computer") {
			computerScore++;
		}
	}

	if (humanScore > computerScore) {
		console.log("You are the winner of this game!");
        alert("You are the winner of this game!");
	} else if (humanScore < computerScore) {
		console.log("You lost the game, better luck next time!");
        alert("You lost the game, better luck next time!");
	} else {
		console.log("The game is a draw!");
        alert("The game is a draw!");
	}
}

playGame()