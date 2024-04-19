import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
/*-----Routes---*/
import Home from "./assets/Pages/Home";
import Offer from "./assets/Pages/Offer";
import Signup from "./assets/Pages/Signup";
import Login from "./assets/Pages/Login";
import NotFound from "./assets/Pages/NotFound";
import Publish from "./assets/Pages/Publish";
import Payment from "./assets/Pages/Payment";
/*-----Components----*/
import Header from "./assets/Components/Header";
import Footer from "./assets/Components/Footer";
function App() {
  // State dans lequel je stocke le token. Sa valeur de base sera :
  // - Si je trouve un cookie token, ce cookie
  // - Sinon, null
  const [token, setToken] = useState(Cookies.get("vinted-token") || null);
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState();
  const [sort, setSort] = useState("");
  const [skip, setSkip] = useState("");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");

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
      <Header
        token={token}
        search={search}
        handleToken={handleToken}
        setSearch={setSearch}
        priceMin={priceMin}
        priceMax={priceMax}
        setPriceMin={setPriceMin}
        setPriceMax={setPriceMax}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              search={search}
              limit={limit}
              setLimit={setLimit}
              sort={sort}
              setSort={setSort}
              priceMin={priceMin}
              priceMax={priceMax}
              skip={skip}
              setSkip={setSkip}
            />
          }
        />
        <Route path="/offers/:id" element={<Offer />} />
        <Route path="/signup/" element={<Signup handleToken={handleToken} />} />
        <Route path="/login/" element={<Login handleToken={handleToken} />} />
        <Route path="/publish/" element={<Publish token={token} />} />
        <Route path="/payment/" element={<Payment />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
