import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Hero from "../Components/Hero";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import avatar from "../IMG/axo.jpg";

const Home = ({ search, prices, sort }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // console.log("title:", search);
        // console.log("Prices:", prices);
        // console.log("Sort:", sort);

        const response = await axios.get(
          `https://site--vinted-backend--l75gkv7mvq6s.code.run/offers?title=${search}&priceMax=${prices.values[1]}&priceMin=${prices.values[0]}&sort=${sort}`
        );

        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [search, prices, sort]);

  return isLoading ? (
    <p></p>
  ) : (
    <div>
      <Nav />
      <Hero />
      <div className="article-container">
        {data.offers.map((offer) => {
          return (
            <Link key={offer._id} to={`/offers/${offer._id}`}>
              <article>
                <div className="global-article">
                  <div className="avatar">
                    {offer.owner.account && offer.owner.account.avatar ? (
                      <img
                        src={offer.owner.account.avatar.secure_url}
                        alt={offer.owner.account.username}
                      />
                    ) : (
                      <img src={avatar} alt="Placeholder Avatar" />
                    )}
                    <span>
                      {offer.owner.account && offer.owner.account.username}
                    </span>
                  </div>

                  <div className="product">
                    <img
                      src={offer.product_image.url}
                      alt={offer.product_name}
                    />
                  </div>

                  <div className="heart-price">
                    <p>{offer.product_price.toFixed(2)} €</p>
                    <div className="likes"></div>
                  </div>
                  <div className="price-include">
                    <span>{(offer.product_price + 2).toFixed(2)} € incl.</span>
                    {/* <FontAwesomeIcon icon="fa-light fa-heart" /> */}
                  </div>
                  <div className="size-mark">
                    <span>{offer.product_details[1].TAILLE}</span>
                    <span>{offer.product_details[0].MARQUE}</span>
                  </div>
                </div>
              </article>
            </Link>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
