import { Link } from "react-router-dom";
import type { HeaderProps } from "../types/props";

const Header = ({ brand, navLabel }: HeaderProps) => {
  return (
    <header className="header">
      <div>
        <div className="header__brand">{brand}</div>
      </div>
      <nav className="header__nav">
        <Link to="/">{navLabel}</Link>
      </nav>
    </header>
  );
};

export default Header;