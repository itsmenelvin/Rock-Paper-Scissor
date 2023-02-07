export default function checkWinner(p, c) {
  const player = p.weapon;
  const computer = c.weapon;
  let result = '';
  if ((player === 'rock' && computer === 'scissor')
    || (player === 'paper' && computer === 'rock')
    || (player === 'scissor' && computer === 'paper')) {
    p.score += 1;
    result += 'Player Win';
  } else if (
    (computer === 'rock' && player === 'scissor')
    || (computer === 'paper' && player === 'rock')
    || (computer === 'scissor' && player === 'paper')) {
    c.score += 1;
    result = 'Computer Win';
  } else {
    result = 'Tie';
  }
  return result;
}

// rock scissor paper
// paper rock scissor
// scissor paper rock
