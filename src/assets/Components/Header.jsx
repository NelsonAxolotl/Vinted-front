import logo from "../IMG/logo.jpg"

const Header = () => {

    return (

        <header>
            <a href="./"><img src={logo} alt="logo vinted" /></a>
            <div className="grid-input">
                <input type="text" placeholder="Recherche des articles" />
                <div className="spany">
                    <span>Trier par prix:</span>
                    <button></button>
                    <span className="price-btw">Prix entre:</span>
                    <button></button>
                </div>
            </div>
            <div className="btn">
                <button className="btn-first">S'inscrire</button>
                <button className="btn-middle">Se connecter</button>
                <button className="btn-last">Vends tes articles</button>
            </div>
        </header>

    );
};

export default Header;