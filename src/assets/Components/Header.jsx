import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import logo from "../IMG/logo.jpg";
import { Link } from "react-router-dom";

const Header = ({ token, search, handleToken, setSearch, prices }) => {
  // const token = Cookies.get("vinted-token");
  // console.log(token);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container">
      <header>
        {/* Si token existe, c'est que je suis connecté, j'affiche le bouton déconnexion, sinon j'affiche les 2 autres boutons */}

        {token ? (
          <>
            <div className="slideicon">
              <Link to="/">
                <img src={logo} alt="logo vinted" />
              </Link>
            </div>
            <div className="grid-input">
              <div className="glass">
                <span>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </span>
                <input
                  type="text"
                  name="search"
                  placeholder="Recherche des articles"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                />
              </div>
            </div>
            <div className="off">
              <button
                onClick={() => {
                  // Je me déconnecte en appelant la fonction handleToken et en lui donnant null en argument
                  handleToken(null);
                }}
              >
                Se déconnecter
              </button>
            </div>
            <Link to="/publish/">
              <button className="btn-last">Vends tes articles</button>
            </Link>
          </>
        ) : (
          <>
            <div className="slide-logo">
              <Link to="/">
                <img src={logo} alt="logo vinted" />
              </Link>
            </div>
            <div className="grid-input">
              <div className="glass">
                <span>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </span>
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
              <Link to="/signup/">
                <button className="btn-first">S'inscrire</button>
              </Link>
              <Link to="/login/">
                <button className="btn-middle">Se connecter</button>
              </Link>
              <Link to="/login/">
                <button className="btn-last">Vends tes articles</button>
              </Link>
            </div>
          </>
        )}
      </header>

      <div className="filters">
        <form className="input-filter" onSubmit={handleSubmit}>
          <input
            type="number"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            placeholder="Prix Max"
          />
          <input
            type="number"
            value={minPrice}
            onChange={handleMinPriceChange}
            placeholder="Prix Min"
          />
        </form>
      </div>
    </div>
  );
};

export default Header;
