<<<<<<< HEAD
import { VStack, Button } from '@chakra-ui/react'
import React from 'react'
import Companies from '../components/Companies'
import Header from '../components/Header'
import LoveToggl from '../components/LoveToggl'
import Million from '../components/Million'
import Navbar from '../components/Navbar'
import Profitablity from '../components/Profitablity'
import RightFeature from '../components/RightFeature'
import Signupfree from '../components/Signupfree'
import Trusted from '../components/Trusted'
=======
import { VStack, Button } from "@chakra-ui/react";
import React from "react";
import Companies from "../components/Companies";
import Header from "../components/Header";
import LoveToggl from "../components/LoveToggl";
import Million from "../components/Million";
import Navbar from "../components/Navbar";

import Profitablity from "../components/Profitablity";
import RightFeature from "../components/RightFeature";
import Signupfree from "../components/Signupfree";
import Trusted from "../components/Trusted";
>>>>>>> 90fabf9c67543b71be65dbc63a329ce58a349ad1

const Home = () => {
  return (
    <VStack>
      <Navbar />
      <Header />
      <Trusted />
      <Profitablity />
      <LoveToggl />
      <Million />
      <Companies />
      <RightFeature />
      <Signupfree />
    </VStack>
  );
};

export default Home;
