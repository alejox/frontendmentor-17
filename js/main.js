const numberContainer = document.querySelector('.rating__numbers');
const rateNumber = document.querySelector('.state__span');
const submitBtn = document.querySelector('.rating__submit');
const rating = document.querySelector('.rating');
const state = document.querySelector('.state');

numberContainer.addEventListener('click', (e) => {
  const numberSelected = e.target.textContent;
  rateNumber.textContent = numberSelected;
  if (numberSelected > 0 || numberSelected <= 5) {
    submitBtn.addEventListener('click', () => {
      rating.style.display = 'none';
      state.style.display = 'grid';
    });
  }
});
