// initialize array
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

console.log(secretMessage.pop()) // remove 'JavaScript' from end of array
console.log(secretMessage.push('to','Program')) // add terms to end of array

// find index for term
let index = secretMessage.indexOf('easily'); 

if (index !== -1) { // if term found
  secretMessage[index] = 'right'; // replace at index
}
console.log(secretMessage.shift()) // remove first term in array
console.log(secretMessage.unshift('Programming')) // add term to start of array

// identify index for term at beginning of phrase
let startIndex = secretMessage.indexOf('get');

if (startIndex !== -1) { // if term found
    secretMessage.splice(startIndex, 5, 'know,'); // splice, removing 5 words at index, and replace with 'know'
}

// concatenate secretMessage with space between terms
console.log(secretMessage.join(' '))