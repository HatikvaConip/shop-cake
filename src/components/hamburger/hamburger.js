import "./hamburger.scss";

const HamburgerMenu = ({openMenu}) => {

  return (
    <div className="hamburger-menu">
      <div onClick={openMenu} className="hamburger" />
      <div className="login" />
    </div>
  );
};

export { HamburgerMenu };
