import Card from "../cards/Card";
import data from "../services/mock/card.mock";
import "./Bacheca.scss";

const Bacheca =()=>{
    return(
        <div className="container-bacheca">
             {data.map((card, i) => {
          return (
            <div key={i}>
              <Card card={card} />
            </div>
          );
        })}
        </div>
    )
};
export default Bacheca;