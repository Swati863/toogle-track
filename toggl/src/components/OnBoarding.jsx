import { Button, Divider, HStack, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import correct from '../Images/correct.png';
const OnBoarding = () => {
    return (
        <VStack w={'100%'} p={'2.3rem'} mt={'3rem !important'} textAlign={'start'} background={'#fce5d8'} borderRadius={'1rem'}>
            <HStack gap={'3rem'}>
                <VStack>
                    <Text fontSize={'2.1rem'} fontWeight={'600'}>
                        Onboarding a large team? We'd love to show you around.
                    </Text>
                    <Text w={'100%'} color={'#baa8c4'} fontSize={'1.2rem'} >
                        Teams of 10+ are eligible for a custom demo to see how Toggl Track works at scale.
                    </Text>
                </VStack>
                <VStack>
                    <Button p='1.8rem 5rem' fontSize={'1.2rem'} _hover={{
                        background: '#7e6e85'
                    }} color='white' background={'#e57cd8'} borderRadius={'3rem'} >Book a demo</Button>
                </VStack>
            </HStack>
            <Divider h={'3px'} m={'1rem 0rem !important'} background={'#e57cd8'} />
            <SimpleGrid w={'100%'} columns={[2, null, 4]} spacing='10' >
                <HStack>
                    <Image src={correct} w={'2.2rem'} h={'2.3rem'} />
                    <Text fontSize={'1.2rem'}>
                        <span style={{
                            fontWeight: '600'
                        }} >Cross-platform  apps </span>
                        for all time tracking preferences.
                    </Text>

                </HStack>
                <HStack>
                    <Image src={correct} w={'2.2rem'} h={'2.3rem'} />
                    <Text fontSize={'1.2rem'}>
                        <span style={{
                            fontWeight: '600'
                        }} >GDPR-compliant. </span>
                        Your security is our priority.
                    </Text>

                </HStack>
                <HStack>
                    <Image src={correct} w={'2.2rem'} h={'2.3rem'} />
                    <Text fontSize={'1.2rem'}>
                        <span style={{
                            fontWeight: '600'
                        }} >Top-rated support </span>
                        with a response time of 3 hours!
                    </Text>

                </HStack>
                <HStack>
                    <Image src={correct} w={'2.2rem'} h={'2.3rem'} />
                    <Text fontSize={'1.2rem'}>
                        <span style={{
                            fontWeight: '600'
                        }} >99% uptime </span>
                        for your peace of mind.
                    </Text>
                </HStack>

            </SimpleGrid>
        </VStack>
    )
}

export default OnBoarding