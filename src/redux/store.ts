import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice/counterSlice";
import StripePaymentSlice from "./slice/stripePaymentSlice";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    payment: StripePaymentSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>(); // Use the useDispatch hook correctly
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
