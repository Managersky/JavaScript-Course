// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
    // METHOD 1
    // return str
    // .split('') // turns string into array, as parameter takes separator
    // .reverse()
    // .join(''); // turns array into string

    // METHOD 2
    // let revStr = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //     revStr = revStr + str[i];
    // }
    // return revStr;

    // METHOD 3
    // let revStr = '';
    // for (let i = 0; i <= str.length - 1; i++) {
    //     revStr = str[i] + revStr;
    // }
    // return revStr;

    // METHOD 4
    // let revStr = '';
    // for (let char of str) { // for..of method
    //     revStr = char + revStr; // char becomes "H", then "e", then "l" etc)
    // }
    // return revStr;

    // METHOD 5
    // let revStr = '';
    // str.split('').forEach(char => {
    //     revStr = char + revStr;
    // });
    // return revStr;

    // METHOD 6
    return str.split('').reduce((separator, char) => char + separator, '')
}


// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) { }



// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) { }



// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) { }



// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) { }



// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() { }



// Call Function
const output = reverseString('hello');

console.log(output);