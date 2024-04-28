import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";

const CheckoutForm = ({ data }) => {
  const [isPaid, setIsPaid] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setDisabled(true);

    try {
      const cardElement = elements.getElement(CardElement);
      const stripeResponse = await stripe.createToken(cardElement, {
        name: "12345678987654321",
      });

      if (stripeResponse && stripeResponse.token) {
        const stripeToken = stripeResponse.token.id;

        const response = await axios.post(
          "https://site--vinted-backend--l75gkv7mvq6s.code.run/payment",
          {
            token: stripeToken,
            title: data.product_name,
            amount: data.product_price,
          }
        );

        console.log(response.data);
        // Vérifiez le statut de réponse et mettez à jour l'état en conséquence
        if (response.data.status === "succeeded") {
          setIsPaid(true);
        }
      }

      setDisabled(false);
    } catch (error) {
      console.log(error);
    }
  };

  return isPaid ? (
    <p>Merci pour votre achat.</p>
  ) : (
    <div className="payment">
      <form onSubmit={handleSubmit}>
        <CardElement />
        <input type="submit" value="PAY" disabled={disabled} />
      </form>
    </div>
  );
};

export default CheckoutForm;
