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

  
// Function to calculate final grade:
const finalGrade = (num1, num2, num3) => {
    // create array to loop
    nums = [num1, num2, num3]
  
    // check valid inputs
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] < 0 || nums[i] > 100) {
        return 'You have entered an invalid grade.'; 
      }
    }
  
    // calculate grade average
    const average = (num1 + num2 + num3) / 3
  
    // return grade
    switch (true) {
      case (average >= 0 && average <= 59):
        return 'F';
      case (average > 59 && average <= 69):
        return 'D';
      case (average > 69 && average <= 79):
        return 'C';
      case (average > 79 && average <= 89):
        return 'B';
      case (average > 89 && average <= 100):
        return 'A';
      default:
        return 'You have entered an invalid grade.';
    }
  }
  
  // Test function
  console.log(finalGrade(99, 92, 95)) // Should print 'A'
  console.log(finalGrade(79, 81, 80)) // Should print 'B'
  console.log(finalGrade(99, 70, 60)) // Should print 'C'
  console.log(finalGrade(70, 70, 60)) // Should print 'D'
  console.log(finalGrade(100, 0, 50)) // Should print 'F'
  console.log(finalGrade(101, 92, 95)) // Should print '...entered an invalid grade.'
  console.log(finalGrade(-100, 92, 95)) // Should print '...entered an invalid grade.'
  console.log(finalGrade('A', 92, 95)) // Should print '...entered an invalid grade.'
  
  