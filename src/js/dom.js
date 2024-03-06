// Aquí van los getElementById y los querySelectorAll que pondrías al principio.

const gameContainer = document.getElementById('hangman-container');
const letterInput = document.getElementById('letter-input');
const hangmanImage = document.getElementById('hangman-image');
const guessButton = document.getElementById('guess-btn');
const restartButton = document.getElementById('restart-btn');
const failLettersElement = document.getElementById('fail-letters');

export {
	gameContainer,
	letterInput,
	hangmanImage,
	guessButton,
	restartButton,
	failLettersElement
};
