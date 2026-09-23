import Banner from "@/components/Banner";
import Cards from "@/components/Cards";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";
import { ToastContainer } from "react-toastify";

const page = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Cards/>
      <Footer/>
      <ToastContainer />
    </div>
  );
};

export default page;
