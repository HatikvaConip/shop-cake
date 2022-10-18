//style
import "./Badge.scss";
import { getMargin } from "../../utils/getMargin";
import { getBorderRadius } from "../../utils/getBorderRadius";

const Badge = ({
  bgColor = "",
  size = "",
  margin = [""],
  borderRadius = [""],
  icon,
  text,
  style = {},
}) => {
  const badgeSize = size.toUpperCase() === "S" ? "small" : size.toUpperCase() === "M" ? "medium" : "large";
  return (
    <div
      style={{
        backgroundColor: bgColor,
        margin: getMargin(margin),
        borderRadius: getBorderRadius(borderRadius),
        ...style?.badge,
      }}
      className={`base ${badgeSize}`}
    >
      {text && <span style={style?.text}>{text}</span>}
      {icon && <span style={style?.icon}>{icon}</span>}
    </div>
  );
};
export default Badge;
