import "./PageTypography";
import Typography from "../../components/typography/Typography";
const PageTypography =()=>{
    return(
        <div>
            <Typography
            size="XS"
            text="torta deriva dal latino tortus, participio passato di torquere, ovvero piegare o avvolgere"
            color={"black"}
            fontFamily={"Arial"}
            fontStyle={"italic"}
            margin={["15"]}
          />
        </div>
    )
}
export default PageTypography;