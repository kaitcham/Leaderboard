import './style.css';
import displayScore from './func/displayScore.js';
import { addScore } from './func/leadData.js';

const form = document.querySelector('.leadboard-form');
const refreshBtn = document.querySelector('.leadboard-form button');

displayScore();

refreshBtn.addEventListener('click', () => {
  displayScore();
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  await addScore();
  displayScore();
  form.reset();
});
