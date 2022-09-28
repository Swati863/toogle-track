import { HStack, Button, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { BsCheckLg, BsFillCaretRightFill } from 'react-icons/bs'

const Chart = ({ Img }) => {

    return (
        <HStack borderRadius={'1rem'} background={'#412a4c'} pt={'2rem'} pb={'4rem'} color='white'>
            <VStack textAlign={'start'} align={'flex-start'} p={'3rem 2.5rem'} w={'65rem'} >
                <Text fontSize={'2.4rem'} fontWeight={'600'}>Make timesheets history.</Text>
                <Text position={'relative'} fontSize={'1.2rem'} w={'89%'}><BsCheckLg style={{
                    display: 'inline',
                }} fill={'#e57cd8'} />&nbsp;&nbsp; Get the data you need without disrupting your team's workflow. Track's one-click time tracking syncs across multiple platforms.</Text>
                <Text fontSize={'1.2rem'} w={'89%'}><BsCheckLg style={{
                    display: 'inline',
                }} fill={'#e57cd8'} /> &nbsp; &nbsp;Get employee buy-in with a tool designed to empower teams with knowledge, not micromanage them.</Text>
                <HStack>
                    <Button p='1.8rem 2.8rem' fontWeight={'700'} _hover={{
                        background: '#7e6e85'
                    }} color='white' background={'#e57cd8'} borderRadius={'3rem'} >Learn More</Button>
                    <Text><a href="#">Or sign up for free <BsFillCaretRightFill style={{
                        display: 'inline',
                        width: '11px',
                        height: '11px',
                    }} /></a></Text>
                </HStack>
            </VStack>
            <VStack>
                <Image src={Img} w={'94%'} />
            </VStack>
        </HStack >
    )
}

export default Chart