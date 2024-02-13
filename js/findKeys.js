// Write function to find if element exists in array, return index if true and -1 if false
const findMyKeys = array => {
    keysFound = array.findIndex( element => {
      return element === 'keys';
    })
  
    return keysFound;
  }
  
  // Test function
  
  const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];
  
  console.log(findMyKeys(randomStuff))
  // Should print 4