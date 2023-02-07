import './style.css';
import aiChoice from './ai'; // return a computer choice in string based on random;
import checkWinner from './winner';

class Game {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }
}

const player = new Game('Player');
const computer = new Game('Computer');

const choices = Array.from(document.querySelectorAll('.choice'));
const playerWeapon = document.querySelector('.player-weapon');
const computerWeapon = document.querySelector('.computer-weapon');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');
const result = document.querySelector('.result');

function start(event) {
  const ai = aiChoice();
  playerWeapon.innerText = event.target.value;
  computerWeapon.innerText = ai;

  player.weapon = event.target.value;
  computer.weapon = ai;

  result.innerText = checkWinner(player, computer);
  playerScore.innerText = player.score;
  computerScore.innerText = computer.score;
}

choices.forEach((choice) => { choice.addEventListener('click', start); });
