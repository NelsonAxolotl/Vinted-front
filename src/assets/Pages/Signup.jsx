import { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [newsletter, setNewsLetter] = useState(true);



    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('https://lereacteur-vinted-api.herokuapp.com/user/signup', {

                email: email,
                username: username,
                password: password,
                newsletter: newsletter,
            });
            //console.log(response);
            const token = response.data.token;

        } catch (error) {
            console.log(error.response.data);
        }

    };
    return (

        <div>

            <form onSubmit={handleSubmit}>

                <h2>S'inscrire</h2>

                <input type="text" placeholder="Nom de l'utilisateur" value={username} onChange={(event) => setUserName(event.target.value)} />

                <input type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />

                <input type="password" placeholder="Mot de passe" value={password} onChange={(event) => setPassword(event.target.value)} />

                <input type="checkbox" checked={newsletter} onChange={(event) => setNewsLetter(event.target.checked)} />

                <h3>S'inscrire à notre newsletter</h3>
                <p>En m'inscrivant je confirme voir lu et accepté les Termes & Conditions et politique de Confidentialité de Vinted.je confirme avoir au moins 18 ans.</p>
                <p></p>
                <button type="submit" value="S'inscire">S'inscrire</button>
            </form>
        </div>

    )

};

export default Signup;