
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faSkull, faGhost } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {

    return (

        <footer >
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
                    <span><FontAwesomeIcon icon={faGhost} /></span>
                    <span><FontAwesomeIcon icon={faCoffee} /></span>
                    <span><FontAwesomeIcon icon={faSkull} /></span>

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

    )

}
export default Footer;