import { Box, HStack, Text } from '@chakra-ui/react'
import React from 'react'

const Standup = () => {
    return (
        <HStack style={{
            background: 'white',
            borderRadius: '5px',
            color: 'black',
            boxShadow: '2em 4em 6em -2em rgba(0,0,0,.5)'
        }} w='97%' p={'0.5rem 1rem'} h={'5rem'} justify={'space-around'}  >
            <Text>Stand up meeting</Text>
            <Text>00:00:00</Text>

        </HStack>
    )
}

export default Standup