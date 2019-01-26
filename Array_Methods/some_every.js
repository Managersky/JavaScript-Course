// More info: https://scotch.io/tutorials/these-2-unpopular-functions-will-improve-how-you-manipulate-javascript-array-data

// Scenario One
// add() function is given mixed input(e.g integers, floats, undefined, strings, e.t.c), 
// it should proceed with just the integers and return the sum from adding them

// const add = (...entries) => {
//     return entries
//         .filter(Number.isInteger) // extract only the integers
//         .reduce((sum, int) => sum + int, 0); // compute the sum
// };

// const add = (...entries) => {
//     return entries.reduce((sum, entry) => {
//         if (Number.isInteger(entry)) {
//             return sum + entry;
//         }
//         return sum;
//     }, 0);
// };

// .some() method method tests whether at least one element 
// in the array passes the test implemented by the provided function.

// const add = (...entries) => {
//     let theSum = 0;
//     if (hasTwoOrMoreInts(entries)) {
//         // there are >= 2 integers, lets sum them
//         theSum = entries.reduce((sum, entry) => {
//             if (Number.isInteger(entry)) {
//                 return sum + entry;
//             }
//             return sum;
//         }, 0);
//     }
//     return theSum;
// };

// // Helper function for .some() method
// const hasTwoOrMoreInts = (entries) => {
//     let lastIndex = -1;
//     let hasMinimumIntsCount = false;

//     const hasAnInt = entries.some((entry, index) => {
//         lastIndex = index;
//         return Number.isInteger(entry);
//     });

//     if (hasAnInt === true) {
//         // we've got one int, is there another?
//         const hasMoreInts = entries.slice(lastIndex + 1).some(Number.isInteger);
//         hasMinimumIntsCount = (hasMoreInts === true) && hasAnInt;
//     }

//     return hasMinimumIntsCount;
// };

// Scenario Two
// add() function can receive mixed input(e.g integers, floats, undefined, strings, e.t.c) 
// but needs to only proceed with computing the sum of the given inputs if all the inputs 
// are integers, a common approach influenced by the prominence of MFR (map, filter, reduce) might look like this:

// const add = (...entries) => {
//     let theSum = 0;
//     const nonInts = entries.filter(entry => !Number.isInteger(entry));
//     if (nonInts.length === 0) { // are there non-ints?
//         theSum = entries.reduce((sum, int) => {
//             return sum + int;
//         }, 0);
//     }
//     return theSum;
// }

// .every() method ests whether all elements in the array pass the test implemented by the provided function.
const add = (...entries) => {
    let theSum = 0;
    const areAllInts = entries.every(Number.isInteger);
    if (areAllInts === true) { // are these indeed all ints?
        theSum = entries.reduce((sum, int) => {
            return sum + int;
        }, 0);
    }
    return theSum;
};

// Call Function
const output = add(1, 2, 3);

console.log(output);