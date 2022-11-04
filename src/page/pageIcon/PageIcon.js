import "./PageIcon";
import Icon from "../../components/iconComponent/Icon";
import icon from "../../logo/logoM.png";
const PageIcon =()=>{
    return(
        <div>
            <Icon
              icon={icon}
              width="20px"
              height="20px"
              bgColor
              margin={[]}
              borderRadius={["20"]}
              style
            />
        </div>
    )
}
export default PageIcon;