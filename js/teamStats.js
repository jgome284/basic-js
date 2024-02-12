// create team object to log game and player info

const team = {
    _players : [
      {firstName: 'john', lastName: 'doe', age: 23},
      {firstName: 'sillvy', lastName: 'stanly', age: 25},
      {firstName: 'donald', lastName: 'calloway', age: 30}
    ],
    _games : [
      {opponent: 'Rangers', teamPoints: 8, opponentPoints: 13},
      {opponent: 'Heat', teamPoints: 104, opponentPoints: 98},
      {opponent: 'Chiefs', teamPoints: 25, opponentPoints: 19}
    ],
  
    get players() {
      return this._players;
    },
  
    get games() {
      return this._games;
    },
  
    addPlayer(newFirstName, newLastName, newAge) {
      const player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      }
      this._players.push(player);
    },
  
    addGame(opponent, teamPoints, opponentPoints) {
      const game = {
        opponent,
        teamPoints,
        opponentPoints
      }
      this._games.push(game);
    }
  }
  
  team.addPlayer('Bugs', 'Bunny', 76);
  team.addGame('Titans', 100, 98);
  
  console.log(team.players)
  console.log(team.games)