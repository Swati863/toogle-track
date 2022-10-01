import { HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import brands from '../Images/brands.avif'
const Trusted = () => {
    return (
        <VStack align={'flex-start'}  p={'3rem 3.5rem'} spacing={'1rem'} >
            {/* align-items: flex-start;
    padding: 1rem 3.5rem; */}

            <Text fontWeight={'600'} style={{ wordSpacing: '0.2rem' }} color={'#d5cfd1'}> TRUSTED BY OVER 6 MILLION USERS ACROSS 120 COUNTRIES</Text>
            <Image w={'75%'} src={brands} />
        </VStack>
    )
}

export default Trusted