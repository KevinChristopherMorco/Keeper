import className from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faDiscord,
  faFacebookMessenger,
} from "@fortawesome/free-brands-svg-icons";

import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className={className.footerText}>
        <p>Creating awesome things!</p>
        <p>
          <span>&copy; {new Date().getFullYear()}</span> All rights reserved
        </p>
        <p>
          <FontAwesomeIcon icon={faLaptopCode} /> Kevin Christopher Morco
        </p>
      </div>
      <ul className={className.iconContainer}>
        <li className={className.listItem}>
          <a
            className={className.listLink}
            href="https://github.com/KevinChristopherMorco"
            target="__blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li className={className.listItem}>
          <a
            className={className.listLink}
            href="https://discordapp.com/users/kevinnnn02"
            target="__blank"
          >
            <FontAwesomeIcon icon={faDiscord} />
          </a>
        </li>
        <li className={className.listItem}>
          <a
            className={className.listLink}
            href="https://www.facebook.com/kevin.morco.5/"
            target="__blank"
          >
            <FontAwesomeIcon icon={faFacebookMessenger} />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
