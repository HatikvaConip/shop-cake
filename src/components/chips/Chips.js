import "./Chips.scss";
//utils
import { getMargin } from "../../utils/getMargin";
import { getBorderRadius } from "../../utils/getBorderRadius";
const Chips = ({
  bgColor = "",
  variant = 'm',
  margin = [],
  borderRadius = [],
  icon,
  text,
  button,
  isReverse = false,
  style = {},
}) => {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        margin: getMargin(margin),
        borderRadius: getBorderRadius(borderRadius),
        ...style?.Chips,
      }}
      className={`container-chips ${isReverse && 'reverse'} ${variant.toLowerCase()}-size`}
    >
      {icon && <span style={style?.icon}>{icon}</span>}
      {text && <span style={style?.text}>{text}</span>}
      {button && <span style={style?.button}>{button}</span>}
    </div>
  );
};
export default Chips;
