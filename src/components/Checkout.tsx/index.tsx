import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { showToast } from "../../helpers/utils";
import { getPayByStripe } from "../../redux/action/stripePaymentAction";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { setIntentDetailsLoading } from "../../redux/slice/stripePaymentSlice";
import { Box, Button, TextField } from "@mui/material";
import Spinner from "../Spinner";

function Checkout() {
  const dispatch = useAppDispatch();
  const { intentDetailsLoading } = useAppSelector((state) => state.payment);
  const [cardReady, setReadyCardReady] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("test123@gmail.com");
  const [amount, setAmount] = useState<number>(0);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (!elements || !stripe) return;
      const cardElement = elements.getElement(CardElement);
      if (!cardElement) {
        console.error("Card element is not available.");
        return;
      }

      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });

      if (error) {
        showToast("Not a valid card", "error");
        return;
      }

      if (paymentMethod) {
        const { id } = paymentMethod;

        const data = {
          email: "test123@gmail.com",
          amount: amount,
          currency: "USD",
          userCtaAddress: "creata1vddr64zryvn6ahcspyw48pd92xy3uffjt8he36",
          payment_Method_Id: id,
        };

        const responseData = await dispatch(getPayByStripe(data));

        if (responseData?.result) {
          const confirmPayment = await stripe?.confirmCardPayment(
            responseData.result
          );

          if (confirmPayment?.paymentIntent?.status === "succeeded") {
            dispatch(setIntentDetailsLoading(false));
            showToast("payment success", "success");
          } else if (confirmPayment?.error) {
            const errorMessage = confirmPayment.error.message as string;
            showToast(errorMessage, "error");
          }
        } else {
          dispatch(setIntentDetailsLoading(false));
        }
      }
    } catch (error) {
      alert("Payment failed!");
    }
  };

  return (
    <Box
      sx={{
        background: "#fff",
        padding: "16px",
        borderRadius: "6px",
        minWidth: { xs: "150px", sm: "550px" },
      }}
    >
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            alignItems: "center",
            minHeight: "100px",
          }}
        >
          <TextField
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={"Enter Email"}
          />
          <TextField
            sx={{ width: "100px" }}
            type="number"
            value={amount}
            className="checkout__textBox"
            onChange={(e) => setAmount(Number(e.target.value))}
            placeholder="Amount"
          />
        </Box>
        <Box
          sx={{
            margin: "10px 0px",
          }}
        >
          <CardElement
            onReady={() => setReadyCardReady(true)}
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button disabled={intentDetailsLoading || !cardReady} type="submit">
            {intentDetailsLoading ? <Spinner /> : "Submit"}
          </Button>
        </Box>
      </form>
    </Box>
  );
}
export default Checkout;
