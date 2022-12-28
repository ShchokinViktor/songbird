const renderActiveBird = (bird, secret = true) => {
  const questionBlock = document.querySelector('.question');

  if (secret) {
    questionBlock.innerHTML =
  `<div class="question__img-holder">
    <img src="https://birds-quiz.netlify.app/static/media/bird.06a46938.jpg" alt="Guess Bird">
  </div>
  <div class="question__info">
    <div class="question__bird-name">****</div>
    <div class="question__audio audio">
      <audio src='${bird.audio}' controls>
      <div class="audio__time">
        <div class="audio__start">00:00</div>
        <div class="audio__start">03:40</div>
      </div>
    </div>
  </div>`;
  } else {
    questionBlock.innerHTML =
  `<div class="question__img-holder">
    <img src="${bird.image}" alt="${bird.name}">
  </div>
  <div class="question__info">
    <div class="question__bird-name">${bird.name}</div>
    <div class="question__audio audio">
    <audio src='${bird.audio}' controls>
      <div class="audio__time">
        <div class="audio__start">00:00</div>
        <div class="audio__start">03:40</div>
      </div>
    </div>
  </div>`;
  }
};

export default renderActiveBird;
