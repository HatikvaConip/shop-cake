import "./chip.scss";
import { getMargin } from "../../utils/getMargin";
import { getBorderRadius } from "../../utils/getBorderRadius";

const Chip = ({
  size = "M",// size
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
      className={`container-chip ${
        isReverse && "reverse"
      } ${size.toLowerCase()}-size ${variant}
      ${disabled && "disabled"}
      ${classes?.chip}
      `}
      tabIndex="1"
    >
      {icon && <span className="icon">{icon}</span>}
      {label && <span className="label">{label}</span>}
      {button && <span className="button">{button}</span>}
    </div>
  );
};
export default Chip;
