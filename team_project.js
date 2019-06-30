const team = {
  _players: [
    {
        firstName: 'Maya', 
        lastName: 'Hamm', 
        age: 35
      },
      {
        firstName: 'Martina', 
        lastName: 'Navratilova', 
        age: 60
      },
      {
        firstName: 'Venus', 
        lastName: 'Williams', 
        age: 30
      },   
  ],
  _games: [
    {
        opponent: 'Raiders',
        teamPoints: 0,
        opponentPoints: 13
      },
      {
        opponent: 'Crusaders',
        teamPoints: 35,
        opponentPoints: 7
      },
      {
        opponent: 'Heat',
        teamPoints: 3,
        opponentPoints: 3
      },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    let player = {
        firstName: firstName,
        lastName: lastName,
        age: age,
    };
    this.players.push(player);
  },
};
team.addPlayer('Joe', 'Namath', 75);
console.log(team.players);
console.log(team.games);