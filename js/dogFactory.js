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

