import logo from "../IMG/logo.jpg"
import { Link } from "react-router-dom";
const Header = () => {

    return (

        <header>

            <Link to="/"><img src={logo} alt="logo vinted" /></Link>
            <div className="grid-input">
                <input type="text" placeholder="Recherche des articles" />

            </div>
            <div className="btn">
                <Link to="/signup/"><button className="btn-first">S'inscrire</button></Link>
                <button className="btn-middle">Se connecter</button>
                <button className="btn-last">Vends tes articles</button>
            </div>
        </header>

    );
};

export default Header;