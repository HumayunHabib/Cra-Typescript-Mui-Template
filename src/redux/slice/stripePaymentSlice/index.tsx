import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PaymentState {
  intentDetailsLoading: boolean;
  paymentIntentDetails: Record<string, any>;
}

const initialState: PaymentState = {
  intentDetailsLoading: false,
  paymentIntentDetails: {},
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setPaymentIntentDetails: (
      state,
      action: PayloadAction<Record<string, any>>
    ) => {
      state.paymentIntentDetails = action.payload;
    },
    setIntentDetailsLoading: (state, action: PayloadAction<boolean>) => {
      state.intentDetailsLoading = action.payload;
    },
    // Add more reducers here if needed
  },
});

export const { setPaymentIntentDetails, setIntentDetailsLoading } =
  paymentSlice.actions;

export default paymentSlice.reducer;
