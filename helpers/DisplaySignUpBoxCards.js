export const DisplaySignUpBoxCards = (id) => {
  const allCards = document.querySelectorAll('.sign-up-boxes');
  const card = document.getElementById(id);

  //disapear cards
  allCards.forEach((card) => card.classList.remove('active'));

  // display card which has passed as id
  card.classList.add('active');
};
