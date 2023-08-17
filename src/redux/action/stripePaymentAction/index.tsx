import axios from "axios";
import { showToast } from "../../../helpers/utils";
import {
  setIntentDetailsLoading,
  setPaymentIntentDetails,
} from "../../slice/stripePaymentSlice";
import { AppDispatch } from "../../store";

interface StripeData {
  email: string;
  amount: number;
  currency: string;
  userCtaAddress: string;
  payment_Method_Id: string;
}

export const getPayByStripe =
  (data: StripeData) => async (dispatch: AppDispatch) => {
    dispatch(setIntentDetailsLoading(true));

    try {
      const response = await axios.post(
        "http://182.176.169.225:35008/api/v1/user/buycta",
        data
      );
      const responseData = response?.data;

      dispatch(setPaymentIntentDetails(responseData));
      dispatch(setIntentDetailsLoading(false));
      return responseData;
    } catch (error) {
      console.log("wdxwedwef", error);
      dispatch(setIntentDetailsLoading(false));
      dispatch(setPaymentIntentDetails({}));

      showToast(
        (error as { response: { data: { message: string } } }).response?.data
          ?.message || "An error occurred",
        "error"
      );
    }
  };
