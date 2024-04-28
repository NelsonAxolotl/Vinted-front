import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import ava from "../IMG/avatar.jpg";

const Offer = ({ token }) => {
  const [data, setData] = useState({});
  const [offer, setOffer] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  //console.log(useParams());
  //   const params = useParams();
  //   const id = params.id;

  const { id } = useParams();
  //   console.log(params.id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const {data} = await axios.get();
        const response = await axios.get(
          `https://site--vinted-backend--l75gkv7mvq6s.code.run/offer/${id}`
        );
        // console.log(response.data);
        setData(response.data);
        setOffer(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <p></p>
  ) : (
    <>
      <main>
        <div className="pic-item">
          <img src={data.product_image.secure_url} alt="clothes" />
        </div>
        <div className="details">
          <div className="details-top">
            <div className="offer-price">
              <span>
                <p>{data.product_price} €</p>
              </span>
            </div>
            <div className="offer-marque">
              <span>MARQUE: </span>
              <span>{data.product_details[0].MARQUE}</span>
            </div>
            <div className="offer-taille">
              <span>TAILLE: </span>
              <span>{data.product_details[1].TAILLE}</span>
            </div>
            <div className="offer-state">
              <span>ÉTAT: </span>
              <span>{data.product_details[2].ÉTAT}</span>
            </div>
            <div className="offer-color">
              <span>COULEUR: </span>
              <span>{data.product_details[3].COULEUR}</span>
            </div>
            <div className="offer-place">
              <span>EMPLACEMENT: </span>
              <span>{data.product_details[4].EMPLACEMENT}</span>
            </div>
            {/* {data.product_details.map((detail) => {
              //console.log(detail);
              const keys = Object.keys(detail);
              //console.log(keys);
              const keyName = keys[0];
              //console.log(keyName);

              return (
                <p key={keyName}>
                  {keyName} {detail[keyName]}
                </p>
              );
            })} */}
          </div>
          <div className="details-bottom">
            <h2>{offer.product_name}</h2>
            <p>{offer.product_description}</p>
            <div className="avatar">
              {offer.owner.account && offer.owner.account.avatar ? (
                <img
                  src={offer.owner.account.avatar.secure_url}
                  alt={offer.owner.account.username}
                />
              ) : (
                <img src={ava} alt="Placeholder Avatar" />
              )}
              <span>{offer.owner.account.username}</span>
            </div>
          </div>
          <div>
            <div className="slide-btn-buy">
              <Link to="/payment/" state={{ data: data }}>
                <button>Acheter</button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Offer;
