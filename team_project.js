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
  addGame(opponent, teamPoints, opponentPoints) {
    let game = {
        opponent: opponent,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints,
    };
    this.games.push(game);
  },
};
team.addPlayer('Joe', 'Namath', 75);
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('Lakers', 0, 76);
team.addGame('Blue Jays', 100, 99);
team.addGame('United', 3, 2);

console.log(team.players);
console.log(team.games);