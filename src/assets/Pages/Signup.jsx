import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";

const Signup = ({ handleToken }) => {

    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newsletter, setNewsLetter] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            setErrorMessage("");
            const response = await axios.post('https://lereacteur-vinted-api.herokuapp.com/user/signup', {

                email: email,
                username: username,
                password: password,
                newsletter: newsletter,
            });

            console.log(response.data);
            handleToken(response.data.token);
            navigate("/");

        } catch (error) {
            console.log(error.response.data);
            if (error.response.status === 401) {
                setErrorMessage(
                    "This email already has an account, please use another one"
                );
            } else if (error.response.data.message === "Missing parameters") {
                setErrorMessage("Please fill in all the fields");
            }
        }
    };

    return (
        <>
            <div className='formulaire'>

                <form onSubmit={handleSubmit}>

                    <h2>S'inscrire</h2>

                    <input
                        type="text"
                        placeholder="Nom de l'utilisateur"
                        name="name"
                        value={username}
                        onChange={(event) => {
                            setUserName(event.target.value)
                        }} />

                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={(event) => {
                            setEmail(event.target.value)
                        }} />

                    <input
                        type="password"
                        placeholder="Mot de passe"
                        name="password"
                        value={password}
                        onChange={(event) => {
                            setPassword(event.target.value)
                        }} />
                    <div className="check">
                        <input
                            type="checkbox"
                            name="newsletter"
                            checked={newsletter}
                            onChange={(event) => {
                                setNewsLetter(!newsletter)
                            }} />
                        <div className='form-span'>
                            <span>S'inscrire à notre newsletter</span>
                        </div>
                    </div>
                    <p>En m'inscrivant je confirme voir lu et accepté les Termes & Conditions et politique de Confidentialité de Vinted.je confirme avoir au moins 18 ans.</p>
                    <div className='btn-slide'>
                        <button type="submit" value="S'inscire">S'inscrire</button>
                        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                        <Link to="/login/">Tu as un compte? connecte toi!</Link>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )

};

export default Signup;