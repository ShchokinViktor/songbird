const ifAnswerRight = (activeBird) => {
  const documentName = document.querySelector('.question__bird-name').textContent;

  return documentName === activeBird.name

};

export default ifAnswerRight;
