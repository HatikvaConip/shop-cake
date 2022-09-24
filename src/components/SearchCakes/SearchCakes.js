import "./SearchCakes";

const SearchCakes = ({ cards, doFilteredCards }) => {

  const doSearch = (e) => {
    const filtered = cards.filter((card) => {
      return card?.title.toLowerCase().includes(e.target.value.toLowerCase());
    });

    doFilteredCards(filtered);
  };
  return (
    <div className="container-search">
      <input onChange={doSearch} />
      {/* TODO card list */}
    </div>
  );
};
export default SearchCakes;
