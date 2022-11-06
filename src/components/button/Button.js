import "./button.scss";
//utils
import { getMargin } from "../../utils/getMargin";
import { getBorderRadius } from "../../utils/getBorderRadius";
const Button = ({
  label = "",
  size = "S",
  handleClick,
  disabled = false,
  variant = "", // filled | outline | text
  ...rest
}) => {
  const buttonSize =
    size.toUpperCase() === "S"
      ? "small"
      : size.toUpperCase() === "M"
      ? "medium"
      : "large";

  return (
    <div
      className={`base ${buttonSize} ${variant} ${disabled && "disabled"}`}
      onClick={handleClick}
      {...rest}
    >
      {label}
    </div>
  );
};
export default Button;
