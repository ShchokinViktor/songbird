const setActiveCategory = (levelNumber) => {
  const activeCategory = document.querySelector('.quiz__level-item_active');
  if(activeCategory) activeCategory.classList.remove('quiz__level-item_active')

  const category = document.querySelectorAll('.quiz__level-item')[levelNumber];
  category.classList.add('quiz__level-item_active');
};

export default setActiveCategory;
