import { words } from './const.js';

import {
	gameContainer,
	letterInput,
	hangmanImage,
	guessButton,
	restartButton,
	failLettersElement
} from './dom.js';

initializeGame();

letterInput.addEventListener('keydown', function (event) {
	if (event.code === 'Enter') {
		guessButton.click();
	}
});

guessButton.addEventListener('click', guessLetter);

restartButton.addEventListener('click', function () {
	location.reload();
});
