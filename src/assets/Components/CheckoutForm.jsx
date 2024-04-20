import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";

const CheckoutForm = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentIsDone, setPaymentIsDone] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Vérifier si Stripe et les éléments sont disponibles
    if (!stripe || !elements) {
      setErrorMessage(
        "Erreur lors de la configuration du paiement. Veuillez réessayer."
      );
      return;
    }
    // On commence à charger
    setIsLoading(true);
    try {
      // Si il y a un problème avec elements on avorte la transaction
      if (elements == null) {
        return;
      }
      //   On fait une requête à Stripe pour vérifier si tout est bon dans les inputs, on destructure la clef error de la réponse et on la renomme submitError
      const { error: submitError } = await elements.submit();

      // Affiche l'erreur en question
      if (submitError) {
        //console.log(submitError);
        // setErrorMessage(submitError.message);
        return;
      }

      // Demande au backend de créer l'intention de paiement, il nous renvoie le clientSecret
      const response = await axios.post(
        "https://site--vinted-backend--l75gkv7mvq6s.code.run/ /payment"
      );

      const clientSecret = response.data.client_secret;

      // Requête à Stripe pour valider le paiement
      const { error, paymentIntent } = await stripe.confirmPayment({
        // elements contient les infos et la configuration du paiement
        elements: elements,
        clientSecret: clientSecret,
        // Éventuelle redirection
        confirmParams: {
          return_url: "http://localhost:5173/",
        },
        // Bloque la redirections
        redirect: "if_required",
      });

      //console.log(paymentIntent);

      // Si une erreur a lieu pendant la confirmation
      if (error) {
        // On la montre au client
        setErrorMessage(error.message);
      }

      // Si on reçois un status succeeded on fais passer completed à true
      if (paymentIntent.status === "succeeded") {
        setPaymentIsDone(true);
      }
      // On a fini de charger

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return paymentIsDone ? (
    <p>Paiment effectué</p>
  ) : (
    <div className="payment">
      <form onSubmit={handleSubmit}>
        <PaymentElement />
        <button type="submit" disabled={!stripe || !elements || isLoading}>
          Valider
        </button>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default CheckoutForm;

// import { useState } from "react";
// import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import axios from "axios";

// const CheckoutForm = ({ title, amount }) => {
//     const [errorMessage, setErrorMessage] = useState(null);
//     const stripe = useStripe();
//     const elements = useElements();

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         // Vérifier si Stripe et les éléments sont disponibles
//         if (!stripe || !elements) {
//             setErrorMessage("Erreur lors de la configuration du paiement. Veuillez réessayer.");
//             return;
//         }

//         try {
//             // Créer une intention de paiement sur le serveur
//             const response = await axios.post("https://lereacteur-vinted-api.herokuapp.com/v2/payment", {
//                 title: title,
//                 amount: amount,
//             });
//             const clientSecret = response.data.client_secret;

//             // Confirmer le paiement avec Stripe
//             const { error } = await stripe.confirmCardPayment(clientSecret, {
//                 payment_method: {
//                     card: elements.getElement(PaymentElement),
//                 },
//             });

//             if (error) {
//                 setErrorMessage(error.message);
//             } else {
//                 // Paiement réussi
//                 console.log("Paiement réussi !");
//             }
//         } catch (error) {
//             console.error("Erreur lors du paiement :", error);
//             setErrorMessage("Erreur lors du paiement. Veuillez réessayer.");
//         }
//     };

//     return (
//         <div className="payment">
//             <form onSubmit={handleSubmit}>
//                 <PaymentElement />
//                 <button type="submit">Payer {amount} € pour {title}</button>
//                 {errorMessage && <p>{errorMessage}</p>}
//             </form>
//         </div>
//     );
// };

// export default CheckoutForm;
