const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (randomNumber > 0.7) {
	alert('Random number greater than 0,7');
}

const numberArray = [1, 2, 3, 4, 5];

for (let i = 0; i < numberArray.length; i++) {
	console.log(numberArray[i]);
}

for (const element of numberArray) {
	console.log(element);
}

for (let i = numberArray.length - 1; i >= 0; i--) {
	console.log(numberArray[i]);
}

const randomNumber2 = Math.random();

if (randomNumber > 0.7 && randomNumber2 > 0.7) {
	alert('alert1');
} else if (randomNumber < 0.2 || randomNumber2 < 0.2) {
	alert('alert2');
}
