import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faSkull, faGhost } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className=" foot-container">
        <div className="foot-all">
          <div className="foot-left">
            <ul>
              <h4>Vinted</h4>
              <li>A propos de Vinted</li>
              <li>carrière</li>
              <li>le développement durable</li>
              <li>Presse</li>
              <li>Pubicités</li>
            </ul>
          </div>
          <div className="foot-mid">
            <ul>
              <h4>Découvrir</h4>
              <li>Comment ça marche</li>
              <li>Vérification de l'article</li>
              <li>Applications mobiles</li>
              <li>Tableau de bord</li>
              <li>Vinted pro</li>
              <li>Guide Vinted pro</li>
            </ul>
          </div>
          <div className="foot-right">
            <ul>
              <h4>Aide</h4>
              <li>Centre d'aide</li>
              <li>Vendre</li>
              <li>Acheter</li>
              <li>Confiance et sécurité</li>
            </ul>
          </div>
        </div>
        <div className="icons">
          <a href="https://www.vinted.fr/">
            <span>
              <FontAwesomeIcon icon={faGhost} />
            </span>
          </a>
          <a href="https://github.com/NelsonAxolotl">
            <span>
              <FontAwesomeIcon icon={faCoffee} />
            </span>
          </a>
          <a href="https://www.linkedin.com/in/nelson-paraiso-98a6b12b5/">
            <span>
              <FontAwesomeIcon icon={faSkull} />
            </span>
          </a>
        </div>
        <div className="foot-bottom">
          <ul>
            <li>Politique et confidentialité</li>
            <li>Politique de cookies</li>
            <li>Paramètres des cookies</li>
            <li>Termes & conditions</li>
            <li>Notre plateforme</li>
            <li>Termes et conditions de Vinted pro</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
