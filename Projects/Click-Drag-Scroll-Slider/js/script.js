const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;
let slideWalk;
let scrollX = 0;

slider.addEventListener('mousedown', (e) => {
	isDown = true;
	slider.classList.add('active');
	startX = e.pageX - slider.offsetLeft; // because we check mouse effect only in the slider area, no on whole page
	scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
	isDown = false;
	slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
	isDown = false;
	slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
	if (!isDown) return; //stop fnc running
	e.preventDefault();
	const x = e.pageX - slider.offsetLeft;
	const walk = (x - startX) * 3; // * 3 px
	slider.scrollLeft = scrollLeft - walk;
	scrollX = slider.scrollLeft;
});

slider.addEventListener('wheel', (e) => {
	e.preventDefault();
	scrollX += 2 * e.deltaY;
	slider.scrollLeft = scrollX;
});
