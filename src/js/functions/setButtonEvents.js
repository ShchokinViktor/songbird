import selectBird from './selectBird.js';

const setButtonEvents = (birds, activeBird) => {
  const birdItems = document.querySelectorAll('.answer__birds-item');
  const btns = document.querySelectorAll('.answer__btn');
  btns.forEach((btn, index) => {
    btn.addEventListener('click', () =>
      selectBird(birds[index], activeBird, birdItems[index])
    );
  });
};

export default setButtonEvents;
