import "./button.scss"
import Button from "../../../components/button/button";

const ButtonPage = () => {
const buttons1 = [
  {
    label: "text",
    size: "s",
    variant: "text",
    handleClick: () => null,
  },
  {
    label: "FILLED",
    size: "s",
    variant: "filled",
    handleClick: () => null,
  },
  {
    label: "OUTLINE",
    size: "s",
    variant: "outline",
    handleClick: () => null,
  },
]
  return (
    <div className="container-page-button">
      <div className="container-row">
        {
          buttons1.map((b, i) => (
            <Button
            key={i}
            label={b.label}
            size={b.size}
            variant={b.variant}
            handleClick={b.handleClick}
          />
          ))
        }
      </div>
      <div className="container-row">
        <Button
          label="Small"
          size="s"
          variant={"text"}
          handleClick={() => null}
        />
        <Button
          label="medium"
          size="m"
          variant={"text"}
          handleClick={() => null}
        />
        <Button
          label="large"
          size="l"
          variant={"text"}
          handleClick={() => null}
        />
        <Button
          label="disabled"
          size="l"
          variant={"text"}
          disabled={true}
          handleClick={() => null}
        />
      </div>
      <div className="container-row">
        <Button
          label="small"
          size="s"
          variant={"filled"}
          handleClick={() => null}
        />
        <Button
          label="medium"
          size="m"
          variant={"filled"}
          handleClick={() => null}
        />
        <Button
          label="large"
          size="l"
          variant={"filled"}
          handleClick={() => null}
        />
        <Button
          label="disabled"
          size="l"
          variant={"filled"}
          disabled={true}
          handleClick={() => null}
        />
      </div>
      <div className="container-row">
        <Button
          label="small"
          size="s"
          variant={"outline"}
          handleClick={() => null}
        />
        <Button
          label="medium"
          size="m"
          variant={"outline"}
          handleClick={() => null}
        />
        <Button
          label="large"
          size="l"
          variant={"outline"}
          handleClick={() => null}
        />
        <Button
          label="disabled"
          size="l"
          variant={"outline"}
          disabled={true}
          handleClick={() => null}
        />
      </div>
    </div>
  );
};
export default ButtonPage;
