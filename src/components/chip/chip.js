import "./chip.scss";
import { getMargin } from "../../utils/getMargin";
import { getBorderRadius } from "../../utils/getBorderRadius";
import cn from "../../utils/cn";

const Chip = ({
  size = "",// size
  margin = [],
  borderRadius = [],
  icon,
  label,
  button,
  isReverse = false,
  disabled = false,
  variant = "", // filled | outline | text
  classes = {
    chip: "",
    icon: "",
    label: "",
    button: ""
  },
  ...rest
}) => {
  return (
    <div
    {...rest}
      style={{
        margin: getMargin(margin),
        borderRadius: getBorderRadius(borderRadius),
      }}
      className={`container-chip ${
        isReverse && "reverse"
      } ${size.toLowerCase()}-size ${variant}
      ${disabled && "disabled"}
      ${classes?.chip}
      `}
      /* tabIndex="1" */ // propieda que sirve para la funcion focus
    >
      {icon && <span className={cn("icon",classes.icon)}>{icon}</span>}
      {label && <span className={cn("label",classes.label)}>{label}</span>}
      {button && <span className={cn("button",classes.button)}>{button}</span>}
    </div>
  );
};
export default Chip;
