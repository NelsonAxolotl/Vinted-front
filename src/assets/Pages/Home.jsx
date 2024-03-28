import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// library.add(faHeart);
import Hero from "../Components/Hero"
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";


const Home = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://lereacteur-vinted-api.herokuapp.com/offers"
                );
                console.log(response.data);
                setData(response.data);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return isLoading ? (
        <p>Loading...</p>
    ) : (
        <div>
            <Nav />
            <Hero />
            <div className="article-container">
                {data.offers.map((offer) => {
                    return (
                        <Link key={offer._id} to={`/offers/${offer._id}`}  >
                            <article >
                                <div className="global-article">
                                    <div className="avatar">
                                        {Object.keys(offer.owner.account).includes("avatar") && (
                                            <img src={offer.owner.account.avatar.url} alt="avatar" />
                                        )}
                                        <span>{offer.owner.account.username}</span>
                                    </div>

                                    <div className="product">
                                        <img src={offer.product_pictures[0].url} alt="" />
                                    </div>

                                    <div className="heart-price">
                                        <p>{offer.product_price.toFixed(2)} €</p>
                                        <div className="likes"></div>
                                    </div>
                                    <div className="price-include">
                                        <span>{(offer.product_price + 2).toFixed(2)} € incl.</span>
                                        {/* <FontAwesomeIcon icon="fa-light fa-heart" /> */}
                                    </div>
                                    <div className="size">
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
