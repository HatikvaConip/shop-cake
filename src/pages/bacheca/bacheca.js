import { useState } from "react";

// styles
import "./bacheca.scss";

// components
import Card from "../../components/card/card";
import SearchCakes from "../../components/searchCakes/searchCakes";
import Button from "../../components/button/button";
import Select from "../../components/select/select";
import Typography from "../../components/typography/typography";
import Badge from "../../components/badge/badge";
import Chips from "../../components/chip/chip";
import Icon from "../../components/icon/icon";
import cards from "../../services/mock/card.mock";
// assets
import logo from "../../assets/logo/logoM.png";

const Bacheca = () => {
  console.log(cards);
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
          margin={["15"]}
          borderRadius={["15"]}
          handleClick={handleClick}
        />
        <Badge
          bgColor="blue"
          size="L"
          margin={["20"]}
          borderRadius={["20"]}
          icon={
            <Icon
              icon={logo}
              width="20px"
              height="20px"
              bgColor="#00ff00"
              margin={["15"]}
              borderRadius={["20"]}
              style
            />
          }
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
          style={{ badge: { backgroundColor: "#66ccff" } }}
        />
        <Chips
          variant = 'S'
          margin={["15"]}
          borderRadius={["20"]}
          icon={
            <Icon
              icon={logo}
              width="20px"
              height="20px"
              bgColor
              margin={[]}
              borderRadius={["20"]}
              style
            />
          }
          text={
            <Typography
              size="M"
              text="Espi"
              color={"black"}
              fontFamily={"verdana"}
              fontStyle={"Italic"}
              margin={[]}
            />
          }
          button={
            <Button
            label="X"
              bgColor={"white"}
              margin={[]}
              borderRadius={["20"]}
              style={{ button: { width: "20px", height: "20px", fontStyle: "normal" } }}
            />
          }
          isReverse ={false}
          disabled= {true}
          
          style
        />
        {
          <Typography
            size="XS"
            text="torta deriva dal latino tortus, participio passato di torquere, ovvero piegare o avvolgere"
            color={"black"}
            fontFamily={"Arial"}
            fontStyle={"italic"}
            margin={["15"]}
          />
        }
        {showMessage && "hello"}
        <Select label="escoge el color " optionsList={list} />
      </div>
      <div className="cards-filtered">
        {cardsFiltered?.map((card, i) => {
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
