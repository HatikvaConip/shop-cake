import "./PageBadge.scss";
import Badge from "../../components/badge/Badge";
import Typography from "../../components/typography/Typography";
import Icon from "../../components/iconComponent/Icon";
import icon from "../../logo/logoM.png";
const PageBadge =()=>{
    return(
        <div>
             <Badge
          bgColor="blue"
          size="L"
          margin={["20"]}
          borderRadius={["20"]}
          icon={
            <Icon
              icon={icon}
              width="20px"
              height="20px"
              bgColor="#00ff00"
              margin={["15"]}
              borderRadius={["20"]}
              style
            />
          }
          text={
            <Typography
              size="M"
              text="torta"
              color={"black"}
              fontFamily={"Arial"}
              fontStyle={"Normal"}
              margin={["25"]}
            />
          }
          style={{ badge: { backgroundColor: "#66ccff" } }}
        />
        </div>
    )
}
export default PageBadge;