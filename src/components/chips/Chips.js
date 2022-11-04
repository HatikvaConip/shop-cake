//style
import "./Chips.scss";

//utils
import { getMargin } from "../../utils/getMargin";
import { getBorderRadius } from "../../utils/getBorderRadius";
const Chips = ({
  variant = "M",
  margin = [],
  borderRadius = [],
  icon,
  text,
  button,
  isReverse = false,
  disabled = false,
  style = {},
}) => {
  return (
    <div
      /* onFocus={() => {
      console.log("pippo");
      }} */
      style={{
        margin: getMargin(margin),
        borderRadius: getBorderRadius(borderRadius),
        ...style?.Chips,
      }}
      className={`container-chips ${
        isReverse && "reverse"
      } ${variant.toLowerCase()}-size
      ${disabled && "disabled"}
      `}
      tabIndex="1"
    >
      {icon && <span style={style?.icon}>{icon}</span>}
      {text && <span style={style?.text}>{text}</span>}
      {button && <span style={style?.button}>{button}</span>}
    </div>
  );
};
export default Chips;
