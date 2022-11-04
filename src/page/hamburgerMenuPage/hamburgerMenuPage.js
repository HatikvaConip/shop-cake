import { useState } from "react";
import { HamburgerMenu } from "../../components/hamburgerMenu/hamburgerMenu";
import Navbar from "../../components/navbar/Navbar";

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
