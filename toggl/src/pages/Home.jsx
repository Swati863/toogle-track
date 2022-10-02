
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
import Footer from '../components/Footer/Footer'
import TopNavbar from '../components/TopNavbar'




const Home = () => {
  return (
    <>
      <TopNavbar/>
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
      <Footer/>
    </VStack>
    </>
  );
};

export default Home;
