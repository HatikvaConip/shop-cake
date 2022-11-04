import "./PageChips";
import Chips from "../../components/chips/Chips";
import Icon from "../../components/iconComponent/Icon";
import icon from "../../logo/logoM.png";
import Typography from "../../components/typography/Typography";
import Button from "../../components/button/Button";

const PageChips =()=>{
    return(
        <div>
             <Chips
          variant = 'S'
          margin={["15"]}
          borderRadius={["20"]}
          icon={
            <Icon
              icon={icon}
              width="20px"
              height="20px"
              bgColor
              margin={[]}
              borderRadius={["20"]}
              style
            />
          }
          text={
            <Typography
              size="M"
              text="Espi"
              color={"black"}
              fontFamily={"verdana"}
              fontStyle={"Italic"}
              margin={[]}
            />
          }
          button={
            <Button
            label="X"
              bgColor={"white"}
              margin={[]}
              borderRadius={["20"]}
              style={{ button: { width: "20px", height: "20px", fontStyle: "normal" } }}
            />
          }
          isReverse ={false}
          disabled= {true}
          
          style
        />
        </div>
    )
}
export default PageChips;