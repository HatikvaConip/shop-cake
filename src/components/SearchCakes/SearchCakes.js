import "./searchCakes";
import {doSearch} from "./utils/doSearch";

const SearchCakes = ({ cards, doFilteredCards }) => {

/*  const { doSearch } = useSearchCakes({ cards, doFilteredCards }); */

const onClick = (e)=> {

  doSearch(e, cards, doFilteredCards)
}

  return (
    <div className="container-search">
      <input onChange={onClick} />
      {/* TODO card list */}
    </div>
  );
};
export default SearchCakes;
