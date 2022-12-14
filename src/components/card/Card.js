// styles
import "./card.scss";

const Card = ({ card }) => {
  return (
    <div className="container">
      <div className="container-card">
        <div className="title">
          <img
            src={card?.logo}
            alt="hello"
            style={{ width: "36px", height: "36px"}}
          ></img>
          <h3>{card?.title}</h3>
        </div>
        <div className="body">
          <img
            src={card?.img}
            alt="hello"
            style={{ width: "150px", height: "200px",border: "none", borderRadius: "6px" }}
          ></img>
        </div>
        <div className="footer">
          <div>{card?.description}</div>
          <div className="prezzo">{card?.prezzo}</div>
        </div>
      </div>
    </div>
  );
};
export default Card;
