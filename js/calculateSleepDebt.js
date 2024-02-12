const getSleepHours = day => {
    switch(day) {
      case 'sunday':
        return 8;
        break;
      case 'monday':
        return 12;
        break;
      case 'tuesday':
        return 4;
        break;
      case 'wednesday':
        return 7;
        break;
      case 'thursday':
        return 6;
        break;
      case 'friday':
        return 6;
        break;
      case 'saturday':
        return 8;
        break;
      default:
        console.log('Please enter a valid date');
        break;
    }
    return
  }
  
  const getActualSleepHours = () => {
    weekDays = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
    
    let total = 0;
  
    for (let i = 0; i < weekDays.length; i++) {
      total += getSleepHours(weekDays[i])
    }
    
    return total
  
  }
  
  // console.log(getActualSleepHours())
  
  const getIdealSleepHours = () => {
    const idealHours = 7;
    return idealHours * 7;
  }
  
  // console.log(getIdealSleepHours())
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours()
    const idealSleepHours = getIdealSleepHours()
  
    if (actualSleepHours === idealSleepHours) {
      console.log(`You got ${actualSleepHours}, the perfect amount of sleep`)
    } else if (actualSleepHours > idealSleepHours) {
      console.log(`You got ${actualSleepHours - idealSleepHours} more hour(s) of sleep than you needed`)
    } else {
      console.log(`You should get ${idealSleepHours - actualSleepHours} more hour(s) of rest`)
    }
  }
  
  calculateSleepDebt();