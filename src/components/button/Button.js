import getSize from "../../utils/getSize";
import "./button.scss";

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

  return (
    <div
      className={`base ${getSize(size)} ${variant} ${
        disabled && "disabled"
      } ${classes.buttonExternal}`}
      onClick={handleClick}
      {...rest}
    >
      {label}
    </div>
  );
};
export default Button;
