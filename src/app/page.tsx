import Banner from "@/components/Banner";
import Cards from "@/components/Cards";

import React from "react";
import { ToastContainer } from "react-toastify";

const page = () => {
  return (
    <div>
      <Banner />
      <Cards/>
      <ToastContainer />
    </div>
  );
};

export default page;
