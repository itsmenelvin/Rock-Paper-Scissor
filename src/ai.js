export default function computerChoice() {
  let m = Math.floor(Math.random() * 3);
  if (m === 0) m = 'rock';
  if (m === 1) m = 'paper';
  if (m === 2) m = 'scissor';
  return m;
}
