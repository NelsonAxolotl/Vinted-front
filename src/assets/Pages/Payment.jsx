import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
// import { useLocation, Navigate } from "react-router-dom";

import CheckoutForm from "../Components/CheckoutForm";
import Footer from "../Components/Footer";

const stripePromise = loadStripe(
    "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP"
);

const Payment = () => {
    const amount = 5
    // const location = useLocation();
    // const { title, amount } = location.state || {}

    const options = {
        // Type de la transaction
        mode: "payment",
        // Montant de la transaction
        amount: Number((amount * 100).toFixed(1)),
        // Devise de la transaction
        currency: "eur",
    };

    return (
        <>
            <div>

            </div>
            <Elements stripe={stripePromise} options={options}>
                <CheckoutForm
                />
            </Elements>
            <Footer />
        </>
    );
}

export default Payment;

