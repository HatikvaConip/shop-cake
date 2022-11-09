import "./button.scss";
//utils
import { getMargin } from "../../utils/getMargin";
import { getBorderRadius } from "../../utils/getBorderRadius";
const Button = ({
  label = "",
  size,
  handleClick,
  disabled = false,
  variant = "", // filled | outline | text
  classes = {
    buttonExternal: "",
  },
  ...rest
}) => {
  const buttonSize = (size) => {
    if (size) {
      switch (size?.toUpperCase()) {
        case "S":
          return "small";
        case "M":
          return "medium";
        case "L":
          return "large";
        default:
          return "";
      }
    } else return "";
  };

  return (
    <div
    
      className={`base ${buttonSize(size)} ${variant} ${
        disabled && "disabled"
      } ${classes?.buttonExternal}`}
      onClick={handleClick}
      {...rest}
    >
      {label}
    </div>
  );
};
export default Button;
