//Get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const stop = player.querySelector('.stop');
const skipButtons = player.querySelectorAll('[data-skip]');
const fullscreenButton = player.querySelector('.fullscreen__button');
const volumeBtn = document.querySelector('.volumeBtn');
const playbackrateBtn = document.querySelector('.playbackrateBtn');

//variables of control bars
const volume = document.querySelector('.volume');
const volumeBar = volume.querySelector('.volume-bar');
const speed = document.querySelector('.speed');
const speedBar = speed.querySelector('.speed-bar');

// default settings for control bars
volumeBar.style.height = '50%';
volumeBar.style.width = '100%';
video.volume = 0.5;
speedBar.style.height = '16.3%';
speedBar.style.width = '100%';
video.playbackRate = 1;
if (window.innerWidth <= 900) {
	volumeBar.style.height = '100%';
	volumeBar.style.width = '50%';
	video.volume = 0.5;
	speedBar.style.height = '100%';
	speedBar.style.width = '16.3%';
	video.playbackRate = 1;
}

//Build our funcions
function togglePlay() {
	const method = video.paused ? 'play' : 'pause';
	video[method]();
}

function updateButton() {
	const icon = this.paused
		? `<i class="fas fa-play"></i>`
		: `<i class="fas fa-pause"></i>`;
	toggle.innerHTML = icon;
}

function stopButton() {
	video.currentTime = 0;
	if (video.paused == false) {
		togglePlay();
	}
}

function skip() {
	// console.log(this.dataset.skip);
	video.currentTime += parseInt(this.dataset.skip);
}

function handleProgress() {
	const percent = (video.currentTime / video.duration) * 100;
	progressBar.style.flexBasis = `${percent}%`;
}

function progressClick(e) {
	const progressBarTime = (e.offsetX / progress.offsetWidth) * video.duration;
	video.currentTime = progressBarTime;
	// console.log(e);
}

function fullscreen() {
	if (video.requestFullscreen) {
		video.requestFullscreen();
	} else if (video.msRequestFullscreen) {
		video.msRequestFullscreen();
	} else if (video.mozRequestFullScreen) {
		video.mozRequestFullScreen();
	} else if (video.webkitRequestFullscreen) {
		video.webkitRequestFullscreen();
	}
}

function volumeBarHandle(e) {
	const y = e.pageY - this.offsetTop;
	const percentY = y / this.offsetHeight;
	const min = 0.1;
	const max = 1;
	const height = 100 - Math.round(percentY * 100) + '%';
	const volume = percentY * (min - max) + max;
	if (window.innerWidth <= 900) {
		const x = e.pageX - this.offsetLeft;
		const percentX = x / this.offsetWidth;
		const width = Math.round(percentX * 100) + '%';
		const volume = percentX * (max - min) + min;
		volumeBar.style.width = width;
		volumeBar.textContent = volume.toFixed(2);
		video.volume = volume;
	} else {
		volumeBar.style.height = height;
		volumeBar.textContent = volume.toFixed(2);
		video.volume = volume;
	}
	if (video.volume > 0) {
		volumeBtn.innerHTML = `<i class="fas fa-volume-up">`;
	}
}

function volumeBarHandleMute(e) {
	if (video.volume != 0) {
		heightTmp = volumeBar.style.height;
		widthTmp = volumeBar.style.width;
		volumeTmp = video.volume;
		video.volume = 0;
		volumeBar.style.height = 0;
		volumeBar.style.width = 0;
		volumeBar.textContent = '';
		volumeBtn.innerHTML = `<i class="fas fa-volume-off">`;
	} else {
		if (window.innerWidth > 900) {
			volumeBar.style.height = heightTmp;
			volumeBar.style.width = '100%';
		} else {
			volumeBar.style.height = '100%';
			volumeBar.style.width = widthTmp;
		}
		volumeBar.textContent = volumeTmp.toFixed(2);
		video.volume = volumeTmp;
		volumeBtn.innerHTML = `<i class="fas fa-volume-up">`;
	}
}

function speedBarHandle(e) {
	const y = e.pageY - this.offsetTop;
	const percentY = y / this.offsetHeight;
	const min = 0.5;
	const max = 4;
	// const height = Math.round(percent * 100) + "%"; //if you wanna start value from top, in css flex-end --> flex-start
	const height = 100 - Math.round(percentY * 100) + '%';
	const playbackRate = percentY * (min - max) + max;
	if (window.innerWidth <= 900) {
		const x = e.pageX - this.offsetLeft;
		const percentX = x / this.offsetWidth;
		const width = Math.round(percentX * 100) + '%';
		const playbackRate = percentX * (max - min) + min;
		speedBar.style.width = width;
		speedBar.textContent = playbackRate.toFixed(1) + 'x';
		video.playbackRate = playbackRate;
	} else {
		speedBar.style.height = height;
		speedBar.textContent = playbackRate.toFixed(1) + 'x';
		video.playbackRate = playbackRate;
	}
}

// Back to normal playbackrate
function speedBarHandleNormal() {
	if (window.innerWidth > 900) {
		if (video.playbackRate != 1) {
			speedBar.style.height = '16.3%';
			speedBar.textContent = '1x';
			video.playbackRate = 1;
		}
	} else {
		if (video.playbackRate != 1) {
			speedBar.style.width = '16.3%';
			speedBar.textContent = '1x';
			video.playbackRate = 1;
		}
	}
}

// check window inner width
function checkInnerWidth(lastWidth) {
	if (window.innerWidth < 900) {
		if (lastWidth >= 900) {
			volumeBar.style.width = volumeBar.style.height;
			speedBar.style.width = speedBar.style.height;
		} else {
			volumeBar.style.width = volumeBar.style.width;
			speedBar.style.width = speedBar.style.width;
		}
		volumeBar.style.height = '100%';
		speedBar.style.height = '100%';
	} else {
		if (lastWidth < 900) {
			volumeBar.style.height = volumeBar.style.width;
			speedBar.style.height = speedBar.style.width;
		} else {
			volumeBar.style.height = volumeBar.style.height;
			speedBar.style.height = speedBar.style.height;
		}
		volumeBar.style.width = '100%';
		speedBar.style.width = '100%';
	}
}

window.addEventListener('DOMContentLoaded', function () {
	//Events
	const windowSize = (function () {
		let lastWidth = window.innerWidth;
		window.addEventListener('resize', function () {
			checkInnerWidth(lastWidth);
			lastWidth = window.innerWidth;
		});
		return { width: lastWidth };
	})();

	video.addEventListener('click', togglePlay);
	video.addEventListener('play', updateButton);
	video.addEventListener('pause', updateButton);
	video.addEventListener('timeupdate', handleProgress);

	// Play, pause, stop
	toggle.addEventListener('click', togglePlay);
	stop.addEventListener('click', () => {
		stopButton();
	});

	/* Skip buttons */
	skipButtons.forEach((button) => button.addEventListener('click', skip));

	/* progress video bar */
	let mousedown = false;
	progress.addEventListener('click', progressClick);
	progress.addEventListener('mousemove', (e) => {
		if (mousedown) {
			progressClick(e);
		}
	});
	progress.addEventListener('mousedown', () => (mousedown = true));
	progress.addEventListener('mouseup', () => (mousedown = false));

	/* Volume and playbackrate bars */
	volume.addEventListener('click', volumeBarHandle);
	volume.addEventListener('mousedown', () => {
		volume.addEventListener('mousemove', volumeBarHandle);
		volume.style.cursor = '-webkit-grabbing';
	});
	volume.addEventListener('mouseup', () => {
		volume.removeEventListener('mousemove', volumeBarHandle);
		volume.style.cursor = '-webkit-grab';
	});

	volumeBtn.addEventListener('click', volumeBarHandleMute);

	speed.addEventListener('click', speedBarHandle);
	speed.addEventListener('mousedown', () => {
		speed.addEventListener('mousemove', speedBarHandle);
		speed.style.cursor = '-webkit-grabbing';
	});
	speed.addEventListener('mouseup', () => {
		speed.removeEventListener('mousemove', speedBarHandle);
		speed.style.cursor = '-webkit-grab';
	});

	playbackrateBtn.addEventListener('click', speedBarHandleNormal);

	/* fullscreen */
	fullscreenButton.addEventListener('click', fullscreen);
});
