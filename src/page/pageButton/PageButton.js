import "./PageButton.scss";
import Button from "../../components/button/Button";
const PageButton = () => {
  return (
    <div className="container-page-button">
      <div className="container-row">
        <Button
          label="text"
          size="S"
          variant={"text"}
          handleClick={() => null}
        />
        <Button
          label="FILLED"
          size="S"
          variant={"filled"}
          handleClick={() => null}
        />
        <Button
          label="OUTLINE"
          size="S"
          variant={"outline"}
          handleClick={() => null}
        />
      </div>
      <div className="container-row">
        <Button
          label="Small"
          size="S"
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
          size="L"
          variant={"text"}
          handleClick={() => null}
        />
        <Button
          label="disabled"
          size="L"
          variant={"text"}
          disabled={true}
          handleClick={() => null}
        />
      </div>
      <div className="container-row">
        <Button
          label="small"
          size="S"
          variant={"filled"}
          handleClick={() => null}
        />
        <Button
          label="medium"
          size="M"
          variant={"filled"}
          handleClick={() => null}
        />
        <Button
          label="large"
          size="L"
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
          size="S"
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
export default PageButton;
