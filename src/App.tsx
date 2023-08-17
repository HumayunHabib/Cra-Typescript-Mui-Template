import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./view/Home/Home";
import StripePayments from "./view/StripePayments";
import NoPageFound from "./components/PageNotFound";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stripe" element={<StripePayments />} />
      <Route path="*" element={<NoPageFound />} />
    </Routes>
  );
};

export default App;
