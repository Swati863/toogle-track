import { Button, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { BsFillCaretRightFill } from 'react-icons/bs'

const Million = () => {
    return (
        <VStack color={'white'} gap={'2rem'} mb={'4rem !important'}>
            <Text fontSize={'2.2rem'} fontWeight={'600'}>
                Join 5 million users tracking their time to get results
            </Text>
            <Text color={'#baa8c4'} fontSize={'1.2rem'} w={'67%'} >
                All plans come with a free, 30-day trial of Toggl Track Premium. Upgrade at the end of the trial or continue using Track for free.
            </Text>
            <HStack>
                <Button p='1.8rem 2.8rem' fontSize={'1.2rem'} _hover={{
                    background: '#7e6e85'
                }} color='white' background={'#e57cd8'} borderRadius={'3rem'} >Start tracking for free</Button>
                <Text fontSize={'1.2rem'} ml={'1rem !important'}><a href="#">Or explore pricing plans <BsFillCaretRightFill style={{
                    display: 'inline',
                    width: '11px',
                    height: '11px',
                }}
                /></a></Text>
            </HStack>
        </VStack>
    )
}

export default Million