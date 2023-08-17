import React from "react";
import { Box } from "@mui/material";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Checkout from "../../components/Checkout.tsx";
const stripePromise = loadStripe(
  "pk_test_51JwKR3HIH80CrEtTxQBoPT9jAar7LgMmkQnWLyye4VYbmFjIuYGuPSbXIk2fGMekEq0T9dQlpYnBJxdVdUBUwU5f00evDLEAY9"
);
const StripePayments: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        padding: "10px",
      }}
    >
      <Elements stripe={stripePromise}>
        <Checkout />
      </Elements>
    </Box>
  );
};

export default StripePayments;
