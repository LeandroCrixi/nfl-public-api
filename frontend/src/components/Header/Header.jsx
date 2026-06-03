import NFLLogo from "../../assets/National_Football_League_logo.svg";
import style from "./Header.module.css";
import components from '../../styles/components/components.module.css'

const Header = () => {
  return (
    <header>
      <nav className={style.nav}>
        <img src={NFLLogo} alt="" />
        <ul>
          <li>Docs</li>
          <li>About</li>
          <li className={`${components.btn} ${components.btnPrimary} ${style.support}`}>Support</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
