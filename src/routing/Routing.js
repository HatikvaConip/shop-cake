import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import Home from "../page/home/Home";
import Bacheca from "../components/bacheca/Bacheca";
import PageButton from "../page/pageButton/PageButton";
import PageBadge from "../page/pageBadge/PageBadge";
import {HamburgerMenuPage} from "../page/hamburgerMenuPage/hamburgerMenuPage";
import PageTypography from "../page/pageTypography/PageTypography";
import PageChips from "../page/pageChips/PageChips";
import PageIcon from "../page/pageIcon/PageIcon";

// mocks
const Routing = ({ cards }) => {
  return (
 
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/bacheca" element={<Bacheca />} />
        <Route exact path="/pageButton" element={<PageButton/>} />
        <Route exact path="/pageBadge" element={<PageBadge/>} />
        <Route exact path="/pageChips" element={<PageChips/>} />
        <Route exact path="/pageTypography" element={<PageTypography/>} />
        <Route exact path="/pageIcon" element={<PageIcon/>} />
        <Route exact path="/pageHamburger" element={<HamburgerMenuPage />} />
      </Routes>

  );
};
export default Routing;
