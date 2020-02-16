// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

// SOLUTION 1
// function addAll() {
    // let args = Array.prototype.slice.call(arguments);
    // let total = 0;

    // for (let i = 0; i < args.length; i++) {
    //     total += args[i];
    // }
    // return total;
// }

// SOLUTION 2
function addAll(...numbers) {
    // METHOD 1
    // let total = 0;

    // numbers.forEach(num => total += num);
    // return total;

    // METHOD 2
    return numbers.reduce((acc, cur) => acc + cur);
}

// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

function sumAllPrimes(num) {
    let total = 0;

    checkForPrime = number => {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }

    for (let i = 2; i <= num; i++) {
        if (checkForPrime(i)) {
            total += i;
        }
    }
    return total;
}

// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

// SOLUTION 1
// function seekAndDestroy(arr) {
//     const args = Array.from(arguments);

//     filterArr = array => {
//         return args.indexOf(array) === -1; // return true if NOT in array
//     }

//     return arr.filter(filterArr);
// }

// SOLUTION 2
function seekAndDestroy(arr, ...rest) {
    return arr.filter(val => !rest.includes(val));
}

// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180] // -1 is tree
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight(array) {
    const arrayPostions = []; // Positions of -1 (trees)
    const arrayValues = []; // Values of people height

    array.forEach((val, i) => {
        return val === -1 ? arrayPostions.push(i) : arrayValues.push(val);
    });

    const sortArr = arrayValues.sort((a, b) => a - b);

    arrayPostions.forEach((val, i) => sortArr.splice(arrayPostions[i], 0, -1))
    return sortArr;
}

// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

function missingLetters(str) {
    let compare = str.charCodeAt(0);
    let missing;

    str.split('').map((char, index) => {
        if (str.charCodeAt(index) == compare) {
            compare++;
        } else {
            missing = String.fromCharCode(compare);
        }
    })

    return missing;
}

// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

function evenOddSums(arr) {
    let evenSum = 0;
    let oddSum = 0;

    arr.forEach(num => (num % 2 === 0 ? (evenSum += num) : (oddSum += num)));
    return [evenSum, oddSum];
}

// Call Function
const output = evenOddSums([50, 60, 60, 45, 71]);

console.log(output);