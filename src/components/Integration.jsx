import { HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { BsFillCaretRightFill } from 'react-icons/bs';
import Img from '../Images/integrations.avif';
const Integration = () => {
    return (
        <HStack align={'flex-start'} color={'#2c1338'} borderRadius={'1rem'} margin={'1rem 3rem'} background={'#f7d8f3'}>
            <VStack align={'flex-start'} gap={'1rem'} padding={'3rem'} >

                <Text lineHeight={'2.9rem'} fontSize={'2.2rem'} textAlign={'start'} fontWeight={'600'}>
                    The only time tracking tool with over 100+ integrations
                </Text>
                <Text color={'#6b5a74'} fontSize={'1.1rem'} textAlign={'start'} w={'77%'}>
                    From Asana to Zapier, Jira, Salesforce and much more — integrate Toggl Track with tools your team already uses.Explore integrations
                </Text>
                <Text  style={{
                        fontSize: '1.3rem',
                        textAlign:'start'
                    }} fontWeight={'600'}>
                    <a   href="#" >Explore integrations <BsFillCaretRightFill style={{
                        display: 'inline',
                        width: '11px',
                        height: '11px',
                    }} /> </a>
                </Text>
            </VStack>
            <HStack justify={'end'} w={'60%'}>
                <Image src={Img} />
            </HStack>

        </HStack>
    )
}

export default Integration