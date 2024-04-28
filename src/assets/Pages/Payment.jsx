import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Cookies from "js-cookie";
import { Navigate, useLocation } from "react-router-dom";

import CheckoutForm from "../Components/CheckoutForm";
import Footer from "../Components/Footer";
import avatar from "../IMG/axo.jpg";

const stripePromise = loadStripe(
  "pk_test_51P7dtj08DZSma5ePpOmZswawCP1MMnuvIQFWaFrsaUpek6BPoDW56Og7Ubqv2PZvE2QKS1hu3tNZWNsVvqyvHcYR00gFkywj1i"
);

const Payment = () => {
  const location = useLocation().state;
  const { data } = location;
  console.log(data);

  const userToken = Cookies.get("userToken");
  // console.log(userToken);

  return userToken ? (
    <div>
      <div className="container-pay">
        <div className="flex-buy">
          <div className="pay">
            <h3>Résumé de la commande...</h3>
            <div className="pay-spanny">
              <span>Nom de l'offre : </span>
              <span>{data.product_name} </span>
            </div>
          </div>
          <div className="avatar">
            {data.owner.account && data.owner.account.avatar ? (
              <img
                src={data.owner.account.avatar.secure_url}
                alt={data.owner.account.username}
              />
            ) : (
              <img src={avatar} alt="Placeholder Avatar" />
            )}
            <span>{data.owner.account && data.owner.account.username}</span>
          </div>
          <div className="pay-price">
            <span>Prix de l'offre : </span>
            <span>{data.product_price.toFixed(2)} €</span>
          </div>
          <div className="pay-total">
            <span>Prix total : </span>
            <span>{(data.product_price + 2).toFixed(2)} €</span>
          </div>

          <div className="pic-item-pay">
            <img src={data.product_image.secure_url} alt="clothes" />
          </div>
        </div>
        <Elements stripe={stripePromise}>
          <CheckoutForm data={data} />
        </Elements>
      </div>
      <Footer />
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Payment;
