import Icon from "../../../components/icon/icon.js";
import ToastDue from "../../../components/toastJs/toastDue.js";
import Typography from "../../../components/typography/typography.js";
import "./toastPage.scss";
import { toastBasicList, toastTitleList,toastActionList,toastOutlinedList,toastFilledList} from "./mock";
import Button from "../../../components/button/button.js";


const ToastPage = () => {
  return (
    <div className="toast-page">
      <div className="container-alerts">
        {toastBasicList.map((t, i) => {
          return (
            <ToastDue
              key={i}
              classes={{ toastDue: "toastDue" }}
              icon={
                <Icon
                  icon={t.icon}
                  width="20px"
                  height="20px"
                  borderRadius={["20"]}
                />
              }
              subTitle={
                <Typography
                  size={t.size}
                  text={t.subTitle}
                  fontFamily={"Roboto, Helvetica, Arial, sans-serif"}
                />
              }
              strong={
                <Typography
                  size="S"
                  text={t.strong}
                  fontFamily={"Roboto, Helvetica, Arial, sans-serif"}
                  margin={["0", "0", "0", "4"]}
                />
              }
              variant={t.variant}
              type={t.type}
            />
          );
        })}
      </div>
      <div className="container-alerts">
        {toastTitleList.map((t, i) => {
          return (
            <ToastDue
              key={i}
              classes={{ toastDue: "toastDue" }}
              icon={
                <Icon
                  icon={t.icon}
                  width="20px"
                  height="20px"
                  borderRadius={["20"]}
                />
              }
              title={
                <Typography
                  size="s"
                  text={t.title}
                  fontFamily={"Roboto, Helvetica, Arial, sans-serif"}
                  justifyContent={"start"}
                />
              }
              subTitle={
                <Typography
                  size={t.size}
                  text={t.subTitle}
                  fontFamily={"Roboto, Helvetica, Arial, sans-serif"}
                />
              }
              strong={
                <Typography
                  size="S"
                  text={t.strong}
                  fontFamily={"Roboto, Helvetica, Arial, sans-serif"}
                  margin={["0", "0", "0", "4"]}
                />
              }
              variant={t.variant}
              type={t.type}
            />
          );
        })}
      </div>
      <div className="container-alerts">
        {toastActionList.map((t, i) => {
          return (
            <ToastDue
              key={i}
              classes={{ toastDue: "toastDue" }}
              icon={
                <Icon
                  icon={t.icon}
                  width="20px"
                  height="20px"
                  borderRadius={["20"]}
                />
              }
              subTitle={
                <Typography
                  size={t.size}
                  text={t.subTitle}
                  fontFamily={"Roboto, Helvetica, Arial, sans-serif"}
                />
              }
              strong={
                <Typography
                  size="S"
                  text={t.strong}
                  fontFamily={"Roboto, Helvetica, Arial, sans-serif"}
                  margin={["0", "0", "0", "4"]}
                />
              }
              button = {
                <Button
                 label={t.labelButton} 
                 size={t.sizeButton}
                 disabled = {false}
                 classes={{ buttonExternal: "buttonExternal" }} />
              }
              variant={t.variant}
              type={t.type}
            />
          );  
        })}
      </div>
      <div className="container-alerts">
        {toastOutlinedList.map((t, i) => {
          return (
            <ToastDue
              key={i}
              classes={{ toastDue: "toastDue" }}
              icon={
                <Icon
                  icon={t.icon}
                  width="20px"
                  height="20px"
                  borderRadius={["20"]}
                />
              }
              subTitle={
                <Typography
                  size={t.size}
                  text={t.subTitle}
                  fontFamily={"Roboto, Helvetica, Arial, sans-serif"}
                />
              }
              strong={
                <Typography
                  size="S"
                  text={t.strong}
                  fontFamily={"Roboto, Helvetica, Arial, sans-serif"}
                  margin={["0", "0", "0", "4"]}
                />
              }
              variant={t.variant}
              type={t.type}
            />
          );
        })}
      </div>
      <div className="container-alerts">
        {toastFilledList.map((t, i) => {
          return (
            <ToastDue
              key={i}
              classes={{ toastDue: "toastDue" }}
              icon={
                <Icon
                  icon={t.icon}
                  width="20px"
                  height="20px"
                  borderRadius={["20"]}
                />
              }
              subTitle={
                <Typography
                  size={t.size}
                  text={t.subTitle}
                  fontFamily={"Roboto, Helvetica, Arial, sans-serif"}
                />
              }
              strong={
                <Typography
                  size="S"
                  text={t.strong}
                  fontFamily={"Roboto, Helvetica, Arial, sans-serif"}
                  margin={["0", "0", "0", "4"]}
                />
              }
              variant={t.variant}
              type={t.type}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ToastPage;
