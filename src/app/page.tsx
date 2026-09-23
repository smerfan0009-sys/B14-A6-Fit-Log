import Banner from "@/components/Banner";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";
import { ToastContainer } from "react-toastify";

const page = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Footer/>

      <ToastContainer />
    </div>
  );
};

export default page;
