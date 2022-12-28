import '../style.scss';
import { getScore } from './functions/score';

import winSound from '../assets/sounds/win.mp3'

const audio = new Audio(winSound);
audio.play();

const result = document.querySelector('.win__par > span');
result.textContent = getScore();

const playAgain = () => {
  window.location.assign(`quiz.html`);
};

const btn = document.querySelector('.win__btn');
btn.addEventListener('click', () => playAgain());
