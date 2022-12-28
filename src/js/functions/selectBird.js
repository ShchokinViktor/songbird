import { decrementScore, addScore, getScore } from './score';
import renderActiveBird from './renderActiveBird';
import renderAnswer from './renderAnswer';
import ifAnswerRight from './ifAnswerRight';

import correctSound from '../../assets/sounds/correct.mp3';
import wrongSound from '../../assets/sounds/wrong.mp3';

function selectBird(bird, activeBird, btnContainer) {
  if (bird.name === activeBird.name) {
    btnContainer.classList.add('answer__birds-item_true');

    if (!ifAnswerRight(activeBird) && getScore() > 0) {
      const audio = new Audio(correctSound);
      audio.play();
      addScore();
    }

    renderActiveBird(bird, false);

    const nextLevelBtn = document.querySelector('.quiz__btn');
    nextLevelBtn.removeAttribute('disabled');
  } else {
    if (!ifAnswerRight(activeBird)) {
      decrementScore();
      btnContainer.classList.add('answer__birds-item_false');

      const audio = new Audio(wrongSound);
      audio.play();
    }
  }

  renderAnswer(bird);
}

export default selectBird;
