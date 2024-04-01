import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
/*-----Routes---*/
import Home from "./assets/Pages/Home"
import Offer from "./assets/Pages/Offer"
import Signup from "./assets/Pages/Signup"
import Login from "./assets/Pages/Login"
import NotFound from './assets/Pages/NotFound';
import Publish from './assets/Pages/Publish';
/*-----Compossant----*/
import Header from "./assets/Components/Header"


function App() {

  // State dans lequel je stocke le token. Sa valeur de base sera :
  // - Si je trouve un cookie token, ce cookie
  // - Sinon, null
  const [token, setToken] = useState(Cookies.get("vinted-token") || null);
  const [search, setSearch] = useState("");
  // Cette fonction permet de stocker le token dans le state et dans les cookies ou supprimer le token dans le state et dans les cookies
  const handleToken = (token) => {
    if (token) {
      Cookies.set("vinted-token", token, { expires: 15 });
      setToken(token);
    } else {
      Cookies.remove("vinted-token");
      setToken(null);
    }
  };


  return (

    <Router>
      <Header token={token}
        search={search}
        handleToken={handleToken}
        setSearch={setSearch} />

      <Routes>
        <Route path="/" element={<Home search={search} />} />
        <Route path="/offers/:id" element={<Offer />} />
        <Route path="/signup/" element={<Signup handleToken={handleToken} />} />
        <Route path="/login/" element={<Login handleToken={handleToken} />} />
        <Route path="/publish/" element={<Publish handleToken={handleToken} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )

}

export default App
