import { useState } from "react";
import { HamburgerMenu } from "../../../components/hamburger/hamburger";
import Navbar from "../../../components/navbar/navbar";

const HamburgerMenuPage = () => {
const [open, setOpen] = useState(false);
    const openMenu = () => {
        setOpen(!open);
    }
  return (
    <div>
      <HamburgerMenu openMenu={openMenu} /> {open && <Navbar />}
    </div>
  );
};

export { HamburgerMenuPage };
