export const getScore = () => {
  return +localStorage.getItem('score');
};

export const decrementScore = () => {
  const prevValue = getScore();

  localStorage.setItem('score', prevValue - 1);
};

export const addScore = () => {
  const scoreElement = document.querySelector('.quiz__score > span');
  const currentScore = +scoreElement.textContent;
  scoreElement.textContent = getScore() + currentScore;
};
