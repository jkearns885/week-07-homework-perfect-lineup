// Do work!

function validateLineup(lineup) {
  let allRequirements = false
  // create a variable which will add all the player's salaries together in the array, using the reduce method.
  let totalSalary = lineup.reduce((acc, cur) => acc + cur.salary, 0)
  // Only continue looping if the total salary of all players in a lineup does not exceed $45,000, else equals to false
  if (totalSalary >= 45000) {
    for (let i = 0; i < lineup.legnth; i++) {
      if()

    }
    return allRequirements
  }


  // Lineups may not contain more than 2 players from a single team 

  // Lineups may not contain more than 3 players from a single game

  // Lineups must contain exactly 3 players with the position of 'OF' and must also contain exactly 1 player 
  // from each of the following positions: 'P', 'C', '1B', '2B', '3B', 'SS'


  return allRequirements
}

module.exports = validateLineup
