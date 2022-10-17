import { useState } from "react";
//style
import "./Select.scss";
const Select = ({ optionsList = [], label = "select " }) => {
  const [selectOption, setSelectOption] = useState(` ${label} ▼ `);
  const [showOption, setShowOption] = useState(false);
  const getSelectOption = (option) => {
    setSelectOption(option);
    console.log(option);
  };
  const clickOption = () => {
    setShowOption(!showOption);
  };
  return (
    <div className="container-select">
      <div className="label" onClick={clickOption}>
        {selectOption}
      </div>
      <div
        className="select"
        value={selectOption}
        onClick={(e) => getSelectOption(e.target.value)}
      >
        {showOption &&
          optionsList.map((option, i) => {
            return (
              <option key={i + option?.value} value={option?.value}>
                {option?.value}{" "}
              </option>
            );
          })}
      </div>
    </div>
  );
};
export default Select;
