import React from "react";
import { Box } from "@chakra-ui/react";
import PriceComparison from "./PriceComparison";
import PricesPlans from "./PricesPlans";
import Navbar from "../Navbar";
import TopNavbar from "../TopNavbar";
import Signupfree from "./Signupfree";
import Footer from "../Footer/Footer";
import Faqs from "../../Faqs";
const Price = () => {
  return (
    <>
      <Box
        mt="-50px"
        bg="#2c1338"
        color={"#FCE5D8"}
        fontFamily={"sans-serif"}
        w={{ base: "100%", md: "100%", lg: "100%" }}
        textAlign={"center"}
      >
        <TopNavbar />
        <Navbar />
        <PricesPlans />
        <PriceComparison />
        <Faqs />
        <Signupfree />

      </Box>
      <Footer />
    </>
  );
};

export default Price;
