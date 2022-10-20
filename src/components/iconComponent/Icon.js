//style
import "./Icon.scss";
const Icon = ({
  icon,
  width,
  height,
  bgColor,
  margin = [""],
  borderRadius = [""],
  style = {},
}) => {
  return (
    <img
      src={icon}
      alt=""
      style={{
        width: width,
        height: height,
        background: bgColor,
        margin: margin,
        borderRadius: borderRadius,
        ...style
      }} className = "container-icon"
    />
  );
};
export default Icon;
