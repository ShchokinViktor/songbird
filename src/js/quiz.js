import '../style.scss';

import birdsData from '../js/data/birdsData.js';
import setActiveCategory from '../js/functions/setActiveCategory.js';
import renderBirdsList from './functions/renderBirdsList.js';
import renderActiveBird from './functions/renderActiveBird';
import setButtonEvents from './functions/setButtonEvents';
import renderAnswer from './functions/renderAnswer';

let currentLevel = 0;

const setLevel = (birdsData, levelNumber) => {
  const birds = birdsData[levelNumber];
  const randomBird = birds[Math.floor(Math.random() * birds.length)];
  console.log(randomBird);

  renderBirdsList(birds);
  renderActiveBird(randomBird);
  renderAnswer();

  setActiveCategory(levelNumber);
  localStorage.setItem('score', 5);
  setButtonEvents(birds, randomBird);
};

const nextLevel = (event) => {
  currentLevel++;

  if (currentLevel >= birdsData.length) {
    const totalScore = document.querySelector('.quiz__score > span').textContent;
    localStorage.setItem('score', totalScore)
    window.location.assign(`win.html`);
  } else {
    event.target.setAttribute('disabled', 'disabled');
    setLevel(birdsData, currentLevel);
  }
};

const nextLevelBtn = document.querySelector('.quiz__btn');
nextLevelBtn.addEventListener('click', (event) => nextLevel(event));

setLevel(birdsData, currentLevel);
