import Banner from "@/components/Banner";
import Navbar from "@/components/shared/Navbar";
import React from "react";
import { ToastContainer } from "react-toastify";

const page = () => {
  return (
    <div>
      <Navbar />
      <Banner />

      <ToastContainer />
    </div>
  );
};

export default page;
