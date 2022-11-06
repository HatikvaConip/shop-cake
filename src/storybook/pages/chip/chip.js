import Chips from "../../../components/chip/chip";
import Icon from "../../../components/icon/icon";
import icon from "../../../assets/logo/logoM.png";
import Typography from "../../../components/typography/typography";
import Button from "../../../components/button/button";

const ChipPage =()=>{
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
export default ChipPage;