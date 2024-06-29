import className from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
  return (
    <nav className={className.navbar}>
      <div className={className.logoContainer}>
        <FontAwesomeIcon icon={faLightbulb} />
        <p>Keeper</p>
      </div>
    </nav>
  );
};

export default Header;
