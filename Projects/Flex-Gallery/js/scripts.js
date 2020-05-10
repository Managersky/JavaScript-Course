const panels = document.querySelectorAll('.panel');

function toggleOpen() {
	this.classList.toggle('open');
}

function toggleActive(e) {
	console.log('hello');
	if (e.propertyName.includes('flex')) {
		//this conditions looks like that because in diffrent browser we have got diffrent name of flex. for example in safari is Flex,in Chrome is Flex-grow
		this.classList.toggle('open-active');
	}
	// this.classList.toggle("open-active");
}

panels.forEach((panel) => panel.addEventListener('click', toggleOpen));
panels.forEach((panel) =>
	panel.addEventListener('transitionend', toggleActive)
);
