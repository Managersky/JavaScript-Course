function playSound(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	if (!audio) return; //stop the function from running

	audio.currentTime = 0; //rewind to the start
	audio.play();
	key.classList.add('playing');
}

function playSoundClick() {
	const key = this.getAttribute('data-key');
	const audio = document.querySelector(`audio[data-key="${key}"]`);

	audio.currentTime = 0; //rewind to the start
	audio.play();
	this.classList.add('playing');
}

function removeTransition(e) {
	if (e.propertyName !== 'transform') return; // skip it if is not transform
	this.classList.remove('playing');
}

window.addEventListener('keydown', playSound);

const keys = document.querySelectorAll('.key');

keys.forEach((key) => key.addEventListener('click', playSoundClick));
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));
