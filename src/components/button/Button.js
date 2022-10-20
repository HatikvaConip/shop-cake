import "./Button.scss";
//utils
import { getMargin } from "../../utils/getMargin";
import { getBorderRadius } from "../../utils/getBorderRadius";
const Button = ({
  label = "",
  size = "S",
  bgColor,
  margin = [""],
  borderRadius = [""],
  handleClick,
  style = {},
}) => {
  const buttonSize = size.toUpperCase() === "S" ? "small" : size.toUpperCase() === "M" ? "medium" : "large";

  return (
    <div>
      <div
        style={{
          backgroundColor: bgColor,
          margin: getMargin(margin),
          borderRadius: getBorderRadius(borderRadius),
          ...style?.button,
        }}
        className={`base ${buttonSize}`}
        onClick={handleClick}
      >
        {label}
      </div>
    </div>
  );
};
export default Button;
