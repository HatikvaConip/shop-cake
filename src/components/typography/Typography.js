// style
import "./Typography.scss";
import { getFontSize } from "../../utils/getFontSize";

const Typography = ({ size = "", text = "", color, fontFamily, fontStyle }) => {
  return (
    <span
      style={{
        color: color,
        fontFamily: fontFamily,
        fontStyle: fontStyle,
        fontSize: getFontSize(size),
      }}
      className="typography"
      //``
    >
      {text}
    </span>
  );
};
export default Typography;
