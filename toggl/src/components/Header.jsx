import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import HeaderLogin from './HeaderLogin'
import styles from './Header.module.css'
import Standup from './Standup'
import Rotate from './Rotate'

const Header = () => {
  return (
    // border: 1px solid red;
    // width: 40rem;
    // text-align: start;
    // font-family: Inter, sans-serif;
    // font-size: 1.6rem;

    <VStack w={'100%'} p={'1rem 3.5rem'} alignItems={'flex-start'} color='white'>
      <Text fontSize={'3.5rem'} width='68%' lineHeight='4rem' fontWeight={'600'} textAlign='start' >Simple time tracking to save you <Rotate word={'time'} /> and <Rotate word={'money'} />  .</Text>
      <HStack w={'97%'} mt={'0.7rem !important'} justify={'space-between'} border='1px solid transparent'>
        <VStack gap={'2.65rem'} border={'1px solid transparent '} textAlign='start' w={'40rem'} >
          <Text color='#FCE5D8' fontSize={'1.6rem'} fontFamily={'Inter, sans-serif'}  >
            Bill accurately, measure profitability, manage workloads — and spend less time on it all.
          </Text>
          <HeaderLogin />
          <Text color='#FCE5D8' fontSize={'1rem'} w={'100%'}>By signing up, you agree to our <a className={styles.anch} href="#">terms of service</a> , <a className={styles.anch} href="#">privacy policy</a> and to receiving marketing communication from Toggl Track. You can opt out anytime.</Text>
        </VStack>
        <VStack color='#FCE5D8' w={'30rem'}>
          <Standup />
          <Text mt={'4.5rem !important'} w='23rem' textAlign={'start'} fontSize={'1.5rem'}> &nbsp;“I love the ease of just clocking in and out with <Rotate word={'just'} /> <Rotate word={'one'} /> <Rotate word={'click!'} />”</Text>
          <Text fontSize={'1.3rem'} width={'22.4rem'} textAlign={'end'}>— Quelani P.</Text>
        </VStack>
      </HStack>
    </VStack>
  )
}

export default Header

