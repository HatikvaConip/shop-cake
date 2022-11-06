import { Route, Routes } from "react-router-dom";

import Home from "../pages/home/home";
import Bacheca from "../pages/bacheca/bacheca";
import ButtonPage from "../storybook/pages/button/button";
import BadgePage from "../storybook/pages/badge/badge";
import {HamburgerMenuPage} from "../storybook/pages/hamburger/hamburger";
import TypographyPage from "../storybook/pages/typography/typography";
import ChipPage from "../storybook/pages/chip/chip";
import IconPage from "../storybook/pages/icon/icon";

// mocks
const Routing = ({ cards }) => {
  return (
      <Routes>
        {/* pages */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/bacheca" element={<Bacheca />} />
        {/* storybook */}
        <Route exact path="/storybook/button" element={<ButtonPage/>} />
        <Route exact path="/storybook/badge" element={<BadgePage/>} />
        <Route exact path="/storybook/chip" element={<ChipPage/>} />
        <Route exact path="/storybook/typography" element={<TypographyPage/>} />
        <Route exact path="/storybook/icon" element={<IconPage/>} />
        <Route exact path="/storybook/hamburger" element={<HamburgerMenuPage />} />
      </Routes>

  );
};
export default Routing;
