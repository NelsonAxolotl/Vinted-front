import { useState } from "react";
import axios from "axios";

const Publish = ({ handleToken }) => {

    const [username, setUsername] = useState("");
    // State qui contient mon image sélectionnée
    const [picture, setPicture] = useState();
    // State qui contient l'url fourni par cloudinary
    const [pictureFromCloudinary, setPictureFromCloudinary] = useState();


    // Simulation du fait que je vais chercher mon token

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Je crée une nouvelle instance du constructeur FormData
            const formData = new FormData();
            // Rajouter 2 paires clef/valeur à mon formdata
            formData.append("name", username);
            formData.append("picture", picture);

            // Je donne 3 arguments à axios.post :
            // - L'URL à interroger
            // - le body, ici un formData
            // - Les potentiels headers à envoyer : ici un token et le type du body que j'envoie
            const response = await axios.post(
                "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${handleToken}`,
                        headers: {
                            "Content-Type": "multipart/form-data",
                        }
                    },
                }
            );
            if (response) {
                console.log(response.data);
                setPictureFromCloudinary(response.data.secure_url);
            } else {
                console.error("Réponse invalide :", response);
            }
        } catch (error) {
            console.log(error.response.data);
        }
    };


    return (
        <>
            <div className="publish">
                <h2>Vends ton article</h2>
                {pictureFromCloudinary && <img src={pictureFromCloudinary} alt="upload" />}
                <div className="publish-pic">
                    <form onSubmit={handleSubmit} >
                        <input
                            // multiple // Pour sélectionner plusieurs fichiers
                            type="file"
                            onChange={(event) => {
                                console.log(event);
                                setPicture(event.target.files[0]);
                            }}
                        />
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={(event) => {
                                // console.log(event);
                                setUsername(event.target.value);
                            }}
                        />
                        <input type="submit" value="Envoyer la photo" />
                    </form>
                </div>
            </div>

        </>
    )
}

export default Publish;