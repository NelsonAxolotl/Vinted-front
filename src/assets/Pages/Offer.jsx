import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Offer = () => {
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
                    `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
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
        <p>Loading...</p>
    ) : (
        <main>
            <div className="pic-item">
                <img src={data.product_image.secure_url} alt="clothes" />
            </div>
            <div className="details">
                <div className="details-top">
                    <span><p>{data.product_price} €</p></span>
                    {data.product_details.map((detail) => {
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
                    })}
                </div>
                <div className="details-bottom">
                    <h2>{offer.product_name}</h2>
                    <p>{offer.product_description}</p>
                    <div className="avatar">
                        <span><img src={offer.owner.account.avatar.url} alt="avatar" /></span>

                        <span>{offer.owner.account.username}</span>
                    </div>
                </div>
                <div>
                    <button>Acheter</button>

                </div>
            </div>

        </main>
    );
};

export default Offer;
