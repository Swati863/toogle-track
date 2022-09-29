import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const LogoButton = ({ logo, title }) => {
    return (

        <Flex align="center" bg="white" color="black" p="3% 7%" borderRadius="3xl" _hover={{ background: "#ffebd7" }}>
            <Image w="25px" src={logo} />
            <Text ml={3} fontWeight="bold">{title}</Text>
        </Flex>

    )
}

export default LogoButton
