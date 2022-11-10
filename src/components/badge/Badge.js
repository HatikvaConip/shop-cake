//style
import "./badge.scss";
import { getMargin } from "../../utils/getMargin";
import { getBorderRadius } from "../../utils/getBorderRadius";
import getSize from "../../utils/getSize";

const Badge = ({
  bgColor = "",
  size = "",
  margin = [""],
  borderRadius = [""],
  icon,
  text,
  style = {},
}) => {
  
  return (
    <div
      style={{
        backgroundColor: bgColor,
        margin: getMargin(margin),
        borderRadius: getBorderRadius(borderRadius),
        ...style?.badge,
      }}
      className={`base ${getSize(size)}`}
    >
      {text && <span style={style?.text}>{text}</span>}
      {icon && <span style={style?.icon}>{icon}</span>}
    </div>
  );
};
export default Badge;
