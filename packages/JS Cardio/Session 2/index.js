// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
    // SOLUTION 1
    // const regExp = /[a-z0-9]+/g;
    // const wordArr = sen.toLowerCase().match(regExp); //create filtered array which return only words
    // const sortedArr = wordArr.sort((a, b) => b.length - a.length); // sort by longest word
    // const longestWordsArr = sortedArr.filter(word => word.length === sortedArr[0].length); // if multiple words has the same lenght, put them into array

    // // check if more than one array value
    // if (longestWordsArr.length === 1) {
    //     return longestWordsArr[0];
    // } else {
    //     return longestWordsArr;
    // }

    // SOLUTION 2
    let maxLetters = 0;
    let outputArr = [];

    sen.toLowerCase()
      .match(/\w+/g)
      .forEach(word => {
        if (!(word.length < maxLetters)) {
          if (word.length > maxLetters) {
            maxLetters = word.length;
            outputArr = [];
          }
          outputArr.push(word);
        }
      });
    
    return outputArr.length > 1 ? outputArr : outputArr[0];
}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
    // SOLUTION 1
    // const chunkedArray = [];
    // let i = 0;

    // while (i < arr.length) {
    //     chunkedArray.push(arr.slice(i, i + len));
    //     i += len;
    // }
    // return chunkedArray;

    // SOLUTION 2
    // const chunkedArr = []; // Init chunked array

    // arr.forEach(val => {
    //     const last = chunkedArr[chunkedArr.length - 1]; // Get last element
    //     // Check if last and if last length is equal to the chunk len
    //     if (!last || last.length === len) {
    //         chunkedArr.push([val]);
    //     } else {
    //         last.push(val);
    //     }
    // });

    // return chunkedArr;

    // SOLUTION 3
    // let i=0, output = [], currArr = [];

    // arr.forEach(element => {
    //     currArr.push(element);
    //     i++;

    //     if (i % len === 0 || i === arr.length) {
    //         output.push(currArr);
    //         currArr = [];
    //     }
    // });
    // return output;

    // SOLUTION 4
    // return Array.from({ length: Math.ceil(arr.length / len) }, (v, i) => arr.slice(i * len, i * len + len));

    // SOLUTION 5
    const chunks = [];

    while (arr.length >= len) {
      chunks.push(arr.splice(0, len));
    }
    chunks.push(arr.splice(0));
    return chunks;
}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
    // SOLUTION 1
    // return arrays.reduce((startPoint, iteration) => startPoint.concat(iteration));

    // SOLUTION 2
    // apply take list of arguments to be passed to concat it takes single array 
    // and passes all the array elements
    // return [].concat.apply([], arrays);

    // SOLUTION 3
    return [].concat(...arrays);
}

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
    // SOLUTION 1
    return formatStr(str1) === formatStr(str2);
}

// Helper function for Anagram
function formatStr(str) {
    const regExp = /[^\w]/g;

    return str
        .replace(regExp, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('');
}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {
    // SOLUTION 1
    const regExp = /[a-z]/gi;
    const regExpVowels = /a|e|i|o|u/gi;

    let newStr = str.toLowerCase().replace(regExp, char => {
        if (char === 'z' || char === 'Z') {
            return 'a';
        } else {
            return String.fromCharCode(char.charCodeAt() + 1);
        }
    });

    newStr = newStr.replace(regExpVowels, vowel => vowel.toUpperCase());
    return newStr;
}

// Call Function
const output = letterChanges('Abcdz');

console.log(output);