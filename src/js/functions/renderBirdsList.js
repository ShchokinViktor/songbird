const renderBirdsList = (birds) => {
  const birdsList = document.querySelector('.answer__birds-list');
  birdsList.innerHTML = '';
  
  birds.forEach((bird) => {
    birdsList.innerHTML += `<li class="answer__birds-item">
      <button class="answer__btn">${bird.name}</button>
    </li>`;
  });
};

export default renderBirdsList;
