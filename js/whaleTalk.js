// Create whale-talk converter
function whaleTalk(input) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
  
    const resultArray = []
  
    for (let i = 0; i < input.length; i++) {
      // used to double e's and u's
      if (input[i] === 'e' || input[i] === 'u') {
      resultArray.push(input[i])
      } 
      // check character as vowel
      for (let j = 0; j < vowels.length; j++) {
        if (input[i] === vowels [j]){
          resultArray.push(input[i]);
        }
      }
    }
  
    return resultArray.join('').toUpperCase();
  
  }
  
const input = 'Jerry, don\'t forget to buy shrimp at the reef, they are on a discount!'
  
console.log(whaleTalk(input))