import { useState } from "react";

// styles
import "./Bacheca.scss";

// components
import Card from "../../components/card";
import SearchCakes from "../SearchCakes";

const Bacheca = ({ cards }) => {
  const [cardsFiltered, setCardsFiltered] = useState(cards);

  const doFilteredCards = (newCardsFiltered) => {
    setCardsFiltered(newCardsFiltered);
  };

  return (
    <div className="container-bacheca">
      <div className="search">
      <SearchCakes cards={cards} doFilteredCards={doFilteredCards} />
      </div>
      <div className="cards-filtered">
      {cardsFiltered.map((card, i) => {
        return (
          <div key={i}>
            <Card card={card} />
          </div>
        );
      })}
      </div>
    </div>
  );
};
export default Bacheca;
