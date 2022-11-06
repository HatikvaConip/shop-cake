// style
import "./typography.scss";
import { getFontSize } from "../../utils/getFontSize";
import { getMargin } from "../../utils/getMargin";

const Typography = ({
  size = "",
  text = "",
  color,
  fontFamily,
  fontStyle,
  margin = [""],
}) => {
    console.log(getMargin(margin));
    console.log({margin})
  return (
    <span
      style={{
        color: color,
        fontFamily: fontFamily,
        fontStyle: fontStyle,
        fontSize: getFontSize(size),
        margin: getMargin(margin),
      }}
      className="typography"
      //``
    >
      {text}
    </span>
  );
};
export default Typography;
