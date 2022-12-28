const renderAnswer = (bird = null) => {
  const answerBlock = document.querySelector('.answer__block')

  if (bird) {
    answerBlock.innerHTML = `<div class="answer__top">
    <div class="answer__img-holder">
      <img src="${bird.image}" alt="${bird.name}">
    </div>
    <div class="answer__info">
      <div class="answer__bird-name">${bird.name}</div>
      <div class="answer__bird-subtitle">${bird.species}</div>
      <div class="answer__audio audio">
        <audio src='${bird.audio}' controls>
        <div class="audio__time">
          <div class="audio__start">00:00</div>
          <div class="audio__start">03:40</div>
        </div>
      </div>
    </div>
  </div>
  <div class="answer__bottom">
    <p class="answer__bird-text">${bird.description}</p>
  </div>`;
  } else {
    answerBlock.innerHTML = '<div class="answer__empty">Прослушайте плеер.<br>Выберите <span>птицу</span> из списка</div>'
  }
};

export default renderAnswer;
