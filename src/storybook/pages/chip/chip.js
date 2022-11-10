import Chip from "../../../components/chip/chip";
import Icon from "../../../components/icon/icon";
import icon from "../../../assets/logo/logoM.png";
import Typography from "../../../components/typography/typography";
import Button from "../../../components/button/button";
import "./chip.scss";

const ChipPage = () => {
  return (
    <div className="container-page-chip">
      <div className="container-row">
<Chip
          classes={{ chip: "chip" }}
          size="s"
          margin={["14"]}
          borderRadius={["20"]}
          label={
            <Typography
              size="S"
              text="Chip Filled"
              color={"black"}
              fontFamily={"verdana"}
              fontStyle={"Italic"}
            />
          }
          isReverse={false}
          disabled={true}
          variant={"filled"}
        />
        <Chip
          classes={{ chip: "chip" }}
          size="m"
          margin={["14"]}
          borderRadius={["20"]}
          label={
            <Typography
              size="S"
              text="Chip Filled"
              color={"black"}
              fontFamily={"verdana"}
              fontStyle={"Italic"}
            />
          }
          isReverse={false}
          disabled={true}
          variant={"filled"}
        />
        <Chip
          classes={{ chip: "chip" }}
          size="l"
          margin={["14"]}
          borderRadius={["20"]}
          label={
            <Typography
              size="S"
              text="Chip Outlined"
              color={"black"}
              fontFamily={"verdana"}
              fontStyle={"Italic"}
            />
          }
          isReverse={false}
          disabled={true}
          variant={"outline"}
          style
        />
</div>
      <div className="container-row">
        <Chip
          classes={{ chip: "chip" }}
          margin={["14"]}
          borderRadius={["20"]}
          label={
            <Typography
              size="S"
              text="Chip Filled"
              color={"black"}
              fontFamily={"verdana"}
              fontStyle={"Italic"}
            />
          }
          isReverse={false}
          disabled={true}
          variant={"filled"}
        />
        <Chip
          classes={{ chip: "chip" }}
          margin={["14"]}
          borderRadius={["20"]}
          label={
            <Typography
              size="S"
              text="Chip Outlined"
              color={"black"}
              fontFamily={"verdana"}
              fontStyle={"Italic"}
            />
          }
          isReverse={false}
          disabled={true}
          variant={"outline"}
        />
      </div>
      <div className="container-row-pointer">
        <Chip
          classes={{ chip: "chip" }}
          margin={["14"]}
          borderRadius={["20"]}
          label={
            <Typography
              size="S"
              text="Clickable"
              color={"black"}
              fontFamily={"verdana"}
              fontStyle={"Italic"}
            />
          }
          isReverse={false}
          disabled={false}
          variant={"filled"}
        />
        <Chip
          classes={{ chip: "chip" }}
          margin={["14"]}
          borderRadius={["20"]}
          label={
            <Typography
              size="S"
              text="Clickable"
              color={"black"}
              fontFamily={"verdana"}
              fontStyle={"Italic"}
            />
          }
          isReverse={false}
          disabled={false}
          variant={"outline"}
        />
      </div>
      <div className="container-row">
      <Chip
        classes={{ chip: "chip" }}
        margin={["14"]}
        borderRadius={["20"]}
        label={
          <Typography
            size="s"
            text="Deletable"
            color={"black"}
            fontFamily={"verdana"}
            fontStyle={"Italic"}
          />
        }
        button={
          <Button label="X" classes={{ buttonExternal: "buttonExternal" }} />
        }
        isReverse={false}
        disabled={false}
        variant={"filled"}
      />
      <Chip
        classes={{ chip: "chip" }}
        margin={["14"]}
        borderRadius={["20"]}
        label={
          <Typography
            size="s"
            text="Deletable"
            color={"black"}
            fontFamily={"verdana"}
            fontStyle={"Italic"}
          />
        }
        button={
          <Button label="X" classes={{ buttonExternal: "buttonExternal" }} />
        }
        isReverse={false}
        disabled={false}
        variant={"outline"}
      />
      </div>
      <div className="container-row">
      <Chip
        classes={{ chip: "chip" }}
        margin={["14"]}
        borderRadius={["20"]}
        label={
          <Typography
            size="s"
            text="Clickable Deletable"
            color={"black"}
            fontFamily={"verdana"}
            fontStyle={"Italic"}
          />
        }
        button={
          <Button label="X" classes={{ buttonExternal: "buttonExternal" }} />
        }
        isReverse={false}
        disabled={false}
        variant={"filled"}
      />
      <Chip
        classes={{ chip: "chip" }}
        margin={["14"]}
        borderRadius={["20"]}
        label={
          <Typography
            size="s"
            text="Clickable Deletable"
            color={"black"}
            fontFamily={"verdana"}
            fontStyle={"Italic"}
          />
        }
        button={
          <Button label="X" classes={{ buttonExternal: "buttonExternal" }} />
        }
        isReverse={false}
        disabled={false}
        variant={"outline"}
      />
      </div>
      <div className="container-row">
      <Chip
        classes={{ chip: "chip" }}
        margin={["14"]}
        borderRadius={["20"]}
        label={
          <Typography
            size="s"
            text="Clickable Deletable"
            color={"black"}
            fontFamily={"verdana"}
            fontStyle={"Italic"}
          />
        }
        icon={
          <Icon
            icon={icon}
            width="20px"
            height="20px"
            borderRadius={["20"]}
          />
        }
        isReverse={true}
        disabled={false}
        variant={"filled"}
      />
      <Chip
        classes={{ chip: "chip" }}
        margin={["14"]}
        borderRadius={["20"]}
        label={
          <Typography
            size="s"
            text="Clickable Deletable"
            color={"black"}
            fontFamily={"verdana"}
            fontStyle={"Italic"}
          />
        }
        icon={
          <Icon
            icon={icon}
            width="20px"
            height="20px"
            borderRadius={["20"]}
          />
        }
        isReverse={true}
        disabled={false}
        variant={"outline"}
      />
      </div>
      <div className="container-row">
      <Chip
        classes={{ chip: "chip" }}
        margin={["14"]}
        borderRadius={["20"]}
        label={
          <Typography
            size="s"
            text="Clickable Deletable"
            color={"black"}
            fontFamily={"verdana"}
            fontStyle={"Italic"}
          />
        }
        icon={
          <Icon
            icon={icon}
            width="20px"
            height="20px"
            borderRadius={["20"]}
          />
        }
        isReverse={false}
        disabled={false}
        variant={"filled"}
      />
      <Chip
        classes={{ chip: "chip" }}
        margin={["14"]}
        borderRadius={["20"]}
        label={
          <Typography
            size="s"
            text="Clickable Deletable"
            color={"black"}
            fontFamily={"verdana"}
            fontStyle={"Italic"}
          />
        }
        icon={
          <Icon
            icon={icon}
            width="20px"
            height="20px"
            borderRadius={["20"]}
          />
        }
        isReverse={false}
        disabled={false}
        variant={"outline"}
      />
      </div>
      <div className="container-row">
      <Chip
        classes={{ chip: "chip" }}
        size="S"
        margin={["14"]}
        borderRadius={["20"]}
        icon={
          <Icon
            icon={icon}
            width="20px"
            height="20px"
            borderRadius={["20"]}
          />
        }
        label={
          <Typography
            size="s"
            text="Espi"
            color={"black"}
            fontFamily={"verdana"}
            fontStyle={"Italic"}
          />
        }
        button={
          <Button label="X" classes={{ buttonExternal: "buttonExternal" }} />
        }
        isReverse={false}
        disabled={false}
        variant={"filled"}
        style
      />
      <Chip
        classes={{ chip: "chip" }}
        size="S"
        margin={["14"]}
        borderRadius={["20"]}
        icon={
          <Icon
            icon={icon}
            width="20px"
            height="20px"
            borderRadius={["20"]}
          />
        }
        label={
          <Typography
            size="s"
            text="Espi"
            color={"black"}
            fontFamily={"verdana"}
            fontStyle={"Italic"}
          />
        }
        button={
          <Button label="X" classes={{ buttonExternal: "buttonExternal" }} />
        }
        isReverse={true}
        disabled={false}
        variant={"filled"}
        style
      />
      </div >
      
    </div>
  );
};
export default ChipPage;
