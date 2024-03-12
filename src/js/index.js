import { guessButton, letterInput, restartButton } from './dom';
import { guessLetter, initializeGame } from './functions';

initializeGame();

// EVENTOS

letterInput.addEventListener('keydown', function (event) {
	if (event.code === 'Enter') {
		guessButton.click();
	}
});

guessButton.addEventListener('click', guessLetter);

restartButton.addEventListener('click', function () {
	location.reload();
});
