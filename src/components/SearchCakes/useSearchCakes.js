import { useState, useCallback } from "react";

const useSearchCakes = ({ cards, doFilteredCards }) => {

    const [test, setTest] = useState(0);

  const doSearch = useCallback((e) => {
    setTest(test + 1);
    console.log("pippo");
    const filtered = cards.filter((card) => {
      return card?.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    doFilteredCards(filtered);
  }, [cards, doFilteredCards, test]);

  return {
    doSearch,
  };
};

export default useSearchCakes;
