// create factory function:

function dogFactory(name, breed, weight) {
    return {
      _name: name,
      _breed: breed,
      _weight: weight,
  
      get name() {
        if (typeof this._name === 'string') {
          return this._name;
        } else {
          return undefined;
        }
      },
  
      get breed() {
        if (typeof this._breed === 'string') {
          return this._breed;
        } else {
          return undefined;
        }
      },
  
      get weight() {
        if (typeof this._weight === 'number') {
          return this._weight;
        } else {
          return undefined;
        }
      },
  
      set name(newName) {
        if (typeof newName === 'string') {
          this._name = newName;
        } else {
          console.log('name should be a string...')
        }
      },
  
      set breed(newBreed) {
        if (typeof newBreed === 'string') {
          this._breed = newBreed;
        } else {
          console.log('breed should be a string...')
        }
      },
  
      set weight(newWeight) {
        if (typeof newWeight === 'number') {
          this._weight = newWeight;
        } else {
          console.log('weight should be a number...')
        }
      },
  
      bark: () => {
        return 'ruff! ruff!';
      },
  
      eatTooManyTreats() {
        this._weight++;
      }
    }
  }

  bert = dogFactory('berty', 'golden doodle', 100)

  console.log(bert.name)   // 'berty'
  console.log(bert.breed)  // 'golden doodle'
  console.log(bert.weight) // 100
  console.log(bert.bark()) // 'ruff! ruff!'
  bert.eatTooManyTreats(); // increase weight by 1
  console.log(bert.weight) // 101
  
  bert.name = 10;
  bert.breed = 11;
  bert.weight = '90' 
  
  marty = dogFactory(10, 20, 'marty')
  console.log(marty.name)   // undefined
  console.log(marty.breed)  // undefined
  console.log(marty.weight) // undefined
  console.log(marty.bark()) // 'ruff! ruff!'
  marty.eatTooManyTreats(); // increase weight by 1
  console.log(marty.weight) // NaN
  
  marty.name = 'marty';
  marty.breed = 'french bulldog';
  marty.weight = 20; 
  console.log(marty.name)   // 'marty'
  console.log(marty.breed)  // 'french bulldog'
  console.log(marty.weight) // 20
  console.log(marty.bark()) // 'ruff! ruff!'
  marty.eatTooManyTreats(); // increase weight by 1
  console.log(marty.weight) // 21
  