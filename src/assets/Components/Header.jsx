import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import logo from "../IMG/logo.jpg"
import { Link } from "react-router-dom";


const Header = ({ token, search, handleToken, setSearch }) => {
    // const token = Cookies.get("vinted-token");
    // console.log(token);

    return (
        <div className='container'>
            <header>

                {/* Si token existe, c'est que je suis connecté, j'affiche le bouton déconnexion, sinon j'affiche les 2 autres boutons */}

                {token ? (
                    <>
                        <div className="slideicon">
                            <Link to="/"><img src={logo} alt="logo vinted" /></Link>
                        </div>
                        <div className="grid-input">
                            <div className='glass'>
                                <span><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                                <input type="text" placeholder="Recherche des articles" />
                            </div>
                        </div>
                        <div className='off'>
                            <button
                                onClick={() => {
                                    // Je me déconnecte en appelant la fonction handleToken et en lui donnant null en argument
                                    handleToken(null);
                                }}
                            >
                                Se déconnecter
                            </button>
                        </div>
                        <Link to="/publish/"><button className="btn-last">Vends tes articles</button>
                        </Link>
                    </>
                ) : (
                    <>
                        <div className="slide-logo">
                            <Link to="/"><img src={logo} alt="logo vinted" /></Link>
                        </div>
                        <div className="grid-input">
                            <div className='glass'>
                                <span><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                                <input
                                    placeholder="Rechercher des articles"
                                    type="text"
                                    name="search"
                                    value={search}
                                    onChange={(event) => {
                                        setSearch(event.target.value);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="btn">
                            <Link to="/signup/"><button className="btn-first">S'inscrire</button></Link>
                            <Link to="/login/"><button className="btn-middle">Se connecter</button></Link>
                            <Link to="/publish/"><button className="btn-last">Vends tes articles</button></Link>
                        </div>
                    </>
                )}

            </header>
        </div>

    );
};

export default Header;