import { words } from './const';
import {
	failLettersElement,
	gameContainer,
	guessButton,
	hangmanImage,
	letterInput
} from './dom';

import hangman0 from '../assets/images/Hangman-0.png';
import hangman1 from '../assets/images/Hangman-1.png';
import hangman2 from '../assets/images/Hangman-2.png';
import hangman3 from '../assets/images/Hangman-3.png';
import hangman4 from '../assets/images/Hangman-4.png';
import hangman5 from '../assets/images/Hangman-5.png';
import hangman6 from '../assets/images/Hangman-6.png';

const hangmanImages = [
	hangman0,
	hangman1,
	hangman2,
	hangman3,
	hangman4,
	hangman5,
	hangman6
];

const randomWords = [];
let selectedWord;
let incorrectGuesses = 0;
const maxIncorrectGuesses = 6;
const failedLetters = [];
const selectedLetters = [];

const guessLetter = () => {
	const letter = letterInput.value.toUpperCase();

	if (selectedLetters.includes(letter)) {
		return;
	}

	selectedLetters.push(letter);

	if (randomWords.length > 0) {
		if (selectedWord.includes(letter)) {
			handleCorrectGuess(letter);
		} else {
			handleIncorrectGuess(letter);
		}
	}
};

const handleCorrectGuess = letter => {
	let allLettersGuessed = true;

	for (let i = 0; i < selectedWord.length; i++) {
		const currentLetter = selectedWord[i];
		if (currentLetter === letter) {
			updateWordDisplay(i, letter);
		}

		if (document.getElementById(`letter-${i}`).textContent === '__ ') {
			allLettersGuessed = false;
		}
	}

	if (allLettersGuessed) {
		showGameOverMessage('YOU WIN', selectedWord);
		disableGameControls();
	}
};

const handleIncorrectGuess = letter => {
	incorrectGuesses++;
	hangmanImage.src = hangmanImages[incorrectGuesses];

	failedLetters.push(letter);
	updateFailedLettersDisplay();

	gameContainer.classList.add('vibrate');

	if (incorrectGuesses === maxIncorrectGuesses) {
		handleGameLoss();
	}

	setTimeout(() => {
		gameContainer.classList.remove('vibrate');
	}, 1000);
};

function selectRandomWord() {
	const randomIndex = Math.floor(Math.random() * words.length);
	randomWords.push(words[randomIndex]);
	return words[randomIndex];
}

function adjustWordDisplay() {
	const wordDisplay = document.getElementById('word-display');
	wordDisplay.innerHTML = '';

	for (let i = 0; i < selectedWord.length; i++) {
		const letterSpan = document.createElement('span');
		letterSpan.id = `letter-${i}`;
		letterSpan.textContent = '__ ';
		wordDisplay.appendChild(letterSpan);
	}
}

function initializeGame() {
	selectedWord = selectRandomWord();
	adjustWordDisplay();
	console.log(randomWords);
}

function updateWordDisplay(index, letter) {
	const letterElement = document.getElementById(`letter-${index}`);
	letterElement.textContent = letter;
}

function updateFailedLettersDisplay() {
	failLettersElement.textContent = `Letras incorrectas: ${failedLetters.join(', ')}`;
}

const showGameOverMessage = message => {
	const gameOverMessage = document.createElement('h1');
	gameOverMessage.textContent = message;
	gameContainer.innerHTML = '';
	gameContainer.appendChild(gameOverMessage);

	const restartButtonAfterGameOver = document.createElement('button');
	restartButtonAfterGameOver.textContent = 'RESTART';
	restartButtonAfterGameOver.id = 'restart-btn-after-game-over';
	restartButtonAfterGameOver.addEventListener('click', function () {
		location.reload();
	});

	gameContainer.appendChild(restartButtonAfterGameOver);
};

const handleGameLoss = () => {
	showGameOverMessage('YOU ARE DEAD', selectedWord);
	disableGameControls();
};

const disableGameControls = () => {
	letterInput.disabled = true;
	guessButton.disabled = true;
};

export {
	guessLetter,
	handleCorrectGuess,
	handleIncorrectGuess,
	selectRandomWord,
	adjustWordDisplay,
	initializeGame,
	updateWordDisplay,
	updateFailedLettersDisplay,
	showGameOverMessage,
	handleGameLoss,
	disableGameControls
};
