import { VStack, Button } from '@chakra-ui/react'
import React from 'react'
import Header from '../components/Header'
import LoveToggl from '../components/LoveToggl'
import Navbar from '../components/Navbar'
import Profitablity from '../components/Profitablity'
import Trusted from '../components/Trusted'

const Home = () => {
  return (
    <VStack>
      <Navbar />
      <Header />
      <Trusted />
      <Profitablity />
      <LoveToggl />
    </VStack>
  )
}

export default Home