function columnize(wrapper, pickSelector) {
	const grid = document.querySelector(wrapper);

	//find all the images
	const picks = [...grid.children].filter((el) => el.matches(pickSelector));
	const everythingsElse = [...grid.children].filter(
		(el) => !el.matches(pickSelector)
	);

	// create left column
	const leftColumn = document.createElement('div');
	leftColumn.classList.add('left');
	picks.forEach((pick) => leftColumn.appendChild(pick));

	// create right column
	const rightColumn = document.createElement('div');
	rightColumn.classList.add('right');
	everythingsElse.forEach((el) => rightColumn.appendChild(el));

	// put it back into the DOM
	grid.appendChild(leftColumn);
	grid.appendChild(rightColumn);
}

columnize('.wrapper', 'img');
