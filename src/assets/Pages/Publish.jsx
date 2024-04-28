import { useState } from "react";
import axios from "axios";
import Footer from "../Components/Footer";
import { Navigate, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPlus } from "@fortawesome/free-solid-svg-icons";

const Publish = ({ token }) => {
  // State qui contient mon image sélectionnée

  const [picture, setPicture] = useState(null);
  const [price, setPrice] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescritption] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [box, setBox] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setPicture(event.target.files[0]);
  };
  const handleRemovePicture = () => {
    setPicture(null);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Je crée une nouvelle instance du constructeur FormData

      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("condition", condition);
      formData.append("city", city);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("picture", picture);

      // Je donne 3 arguments à axios.post :
      // - L'URL à interroger
      // - le body, ici un formData
      // - Les potentiels headers à envoyer : ici un token et le type du body que j'envoie
      const response = await axios.post(
        "https://site--vinted-backend--l75gkv7mvq6s.code.run/offer/publish",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // console.log(response.data);
      if (response.data._id) {
        navigate(`/offers/${response.data._id}`);
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div>
      {token ? (
        <>
          <div className="publish-container">
            <div className="global">
              <h2>Vends ton article</h2>
              <div className="publish">
                <div className="avatar-placeholder">
                  {/* Placeholder pour une future image d'avatar */}
                  <div className="avatar"></div>
                </div>

                <div className="file-frame">
                  {picture && (
                    <div className="image-container">
                      <img src={URL.createObjectURL(picture)} alt="produit" />
                      <button
                        className="remove-button"
                        onClick={handleRemovePicture}
                      >
                        <FontAwesomeIcon icon={faTimes} />
                      </button>
                    </div>
                  )}

                  {!picture && (
                    <>
                      <label htmlFor="picture-input" className="add-photo">
                        <FontAwesomeIcon icon={faPlus} />
                        Ajouter une photo
                      </label>
                      <input
                        style={{ display: "none" }}
                        id="picture-input"
                        type="file"
                        onChange={handleFileChange}
                      />
                    </>
                  )}
                </div>
              </div>
              <div className="publish-form">
                <form className="form" onSubmit={handleSubmit}>
                  <div className="input-1">
                    <div className="titre">
                      <h4>Titre</h4>
                      <input
                        className="input-titre"
                        type="text"
                        name="title"
                        placeholder="Titre"
                        value={title}
                        onChange={(event) => {
                          setTitle(event.target.value);
                        }}
                      />
                    </div>
                    <div className="description">
                      <h4>Décris ton article</h4>
                      <textarea
                        className="textarea-text"
                        name="description"
                        placeholder="Description"
                        rows={6}
                        cols={30}
                        value={description}
                        onChange={(event) => {
                          setDescritption(event.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="input-2">
                    <div className="mark">
                      <h4>Marque</h4>
                      <input
                        type="text"
                        name="brand"
                        placeholder="Marque"
                        value={brand}
                        onChange={(event) => {
                          setBrand(event.target.value);
                        }}
                      />
                    </div>
                    <div className="taille">
                      <h4>Taille</h4>
                      <input
                        type="number"
                        name="size"
                        placeholder="Taille"
                        value={size}
                        onChange={(event) => {
                          setSize(event.target.value);
                        }}
                      />
                    </div>
                    <div className="color">
                      <h4>couleur</h4>
                      <input
                        type="text"
                        name="color"
                        placeholder="Couleur"
                        value={color}
                        onChange={(event) => {
                          setColor(event.target.value);
                        }}
                      />
                    </div>
                    <div className="etat">
                      <h4>Etat</h4>
                      <input
                        type="text"
                        name="condition"
                        placeholder="État"
                        value={condition}
                        onChange={(event) => {
                          setCondition(event.target.value);
                        }}
                      />
                    </div>
                    <div className="place">
                      <h4>Lieux</h4>
                      <input
                        type="text"
                        name="city"
                        placeholder="Ville"
                        value={city}
                        onChange={(event) => {
                          setCity(event.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="input-3">
                    <div className="input-price">
                      <h3>Prix</h3>
                      <input
                        type="number"
                        name="price"
                        placeholder="Prix"
                        value={price}
                        onChange={(event) => {
                          setPrice(event.target.value);
                        }}
                      />
                    </div>
                    <div className="input-box">
                      <span>
                        <input
                          type="checkbox"
                          name="checkbox"
                          value={box}
                          onChange={(event) => {
                            setBox(event.target.checked);
                          }}
                        />
                      </span>
                      <span>
                        <h4>Je suis intéressé(e) par les échanges</h4>
                      </span>
                    </div>
                  </div>
                  <div className="btn-ajouter">
                    <button className="btn-add">Ajouter</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <>
          <Navigate to="/login/" />
        </>
      )}
    </div>
  );
};

export default Publish;
