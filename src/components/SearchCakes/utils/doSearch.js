export const doSearch = (e, cards, doFilteredCards) => {
  console.log("pippo");
  const filtered = cards.filter((card) => {
    return card?.title.toLowerCase().includes(e.target.value.toLowerCase());
  });
  doFilteredCards(filtered);
};
