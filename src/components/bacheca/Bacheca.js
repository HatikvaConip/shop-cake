import { useState } from "react";

// styles
import "./Bacheca.scss";

// components
import Card from "../../components/card";
import SearchCakes from "../SearchCakes";
import Button from "../button/Button";
import Select from "../select/Select";
import Typography from "../typography/Typography";
import Badge from "../badge/Badge";

const Bacheca = ({ cards }) => {
  const [cardsFiltered, setCardsFiltered] = useState(cards);
  const [showMessage, setShowMessage] = useState(false);

  const doFilteredCards = (newCardsFiltered) => {
    setCardsFiltered(newCardsFiltered);
  };
  const handleClick = () => {
    setShowMessage(!showMessage);
  };
  const list = [
    { color: "red", value: "Red" },
    { color: "blue", value: "Blue" },
    { color: "green", value: "Green" },
  ];
  return (
    <div className="container-bacheca">
      <div className="search">
        <SearchCakes cards={cards} doFilteredCards={doFilteredCards} />
      </div>
      <div>
        <Button
          label="Click"
          size="S"
          bgColor={"red"}
          handleClick={handleClick}
        />
        <Badge
          bgColor="blue"
          size="L"
          margin={["20"]}
          borderRadius={["20"]}
          text={
            <Typography
              size="M"
              text="torta"
              color={"black"}
              fontFamily={"Arial"}
              fontStyle={"Normal"}
              margin={["25"]}
            />
          }
          style={{badge :{ backgroundColor:"#66ccff"} }}
        ></Badge>
        {<Typography
          size="XS"
          text="torta deriva dal latino tortus, participio passato di torquere, ovvero piegare o avvolgere"
          color={"black"}
          fontFamily={"Arial"}
          fontStyle={"italic"}
          margin={["15"]}
        />}
        {showMessage && "hello"}
        <Select label="escoge el color " optionsList={list} />
      </div>
      <div className="cards-filtered">
        {cardsFiltered.map((card, i) => {
          return (
            <div key={i}>
              <Card card={card} />
            </div>
          );
        })}
        <Button
          label="ivan"
          size="L"
          bgColor={"green"}
          handleClick={handleClick}
        />
        {showMessage && "hola"}
      </div>
    </div>
  );
};
export default Bacheca;
