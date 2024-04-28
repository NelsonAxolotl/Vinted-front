import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";

const Login = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [, setToken] = useState();

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://site--vinted-backend--l75gkv7mvq6s.code.run/user/login",
        {
          email: email,
          password: password,
        }
      );
      // console.log(response.data);
      Cookies.set("userToken", response.data.token, { expires: 15 });
      setToken(response.data.token);
      if (response.data.token) handleToken(response.data.token);
      navigate("/");
    } catch (error) {
      console.log(error.response.data);
      if (error.response.status === 401) {
        setErrorMessage("Not valid email or password");
      } else if (error.response.data.message === "Missing parameters") {
        setErrorMessage("Please fill in all the fields");
      }
    }
  };

  return (
    <>
      <div className="form-connexion">
        <form className="login" onSubmit={handleSubmit}>
          <h2>Se connecter</h2>
          <input
            type="email"
            placeholder="Adresse email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />

          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <div className="btn-slide2">
            <button type="submit" value="Se connecter">
              Se connecter
            </button>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

            <Link to="/signup/">Pas encore de compte? inscris toi!</Link>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
