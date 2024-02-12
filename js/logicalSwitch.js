// Function to return lifephase
const lifePhase = age => {
    switch (true) {
      case (age >= 0 && age <= 3):
        return 'baby';
      case (age >= 4 && age <= 12):
        return 'child';
      case (age >= 13 && age <= 19):
        return 'teen';
      case (age >= 20 && age <= 64):
        return 'adult';
      case (age >= 65 && age <= 140):
        return 'senior citizen';
      default:
        return 'This is not a valid age';
  
    }
  }
  
  console.log(lifePhase(0)) //should print 'baby'
  console.log(lifePhase(4)) //should print 'child'
  console.log(lifePhase(19)) //should print 'teen'
  console.log(lifePhase(20)) //should print 'adult'
  console.log(lifePhase(140)) //should print 'senior citizen'
  console.log(lifePhase(141)) //should print '...not a valid age'
  console.log(lifePhase(-1)) //should print '...not a valid age'
  
  // We encourage you to add more function calls of your own to test your code!