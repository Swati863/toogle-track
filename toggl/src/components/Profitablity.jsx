import { Button, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Chart from './Chart'
import Employee from '../Images/employee-time-tracking.avif'
const Profitablity = () => {
    return (
        <VStack align={'center'} pb={'5rem'} background={'#fef6f3'} w={'100%'} pt={'6rem'} pl={'3.5rem'} pr={'3.5rem'}>
            <Text fontSize={'2.8rem'} fontWeight={'600'} w={'80%'} >
                Time tracking for all your productivity and profitability needs
            </Text>
            <HStack gap={'0.5rem'} mt={'3.5rem !important'} mb={'3.5rem !important'}>
                <Button p='1.6rem 1.9rem' fontWeight={'700'} _hover={{
                    background: '#7e6e85'
                }} fontSize={'1.14rem'} color='#2c1338' background={'#ffebbd'} borderRadius={'3rem'} >Employee time tracking</Button >
                <Button p='1.6rem 1.9rem' fontWeight={'700'} _hover={{
                    background: '#7e6e85'
                }} fontSize={'1.14rem'} color='#2c1338' background={'#ffebbd'} borderRadius={'3rem'} >Billing & invocing</Button >
                <Button p='1.6rem 1.9rem' fontWeight={'700'} _hover={{
                    background: '#7e6e85'
                }} fontSize={'1.14rem'} color='#2c1338' background={'#ffebbd'} borderRadius={'3rem'} >Project budgeting </Button >
                <Button p='1.6rem 1.9rem' fontWeight={'700'} _hover={{
                    background: '#7e6e85'
                }} fontSize={'1.14rem'} color='#2c1338' background={'#ffebbd'} borderRadius={'3rem'} >Reporting</Button >
                <Button p='1.6rem 1.9rem' fontWeight={'700'} _hover={{
                    background: '#7e6e85'
                }} fontSize={'1.14rem'} color='#2c1338' background={'#ffebbd'} borderRadius={'3rem'} >Payroll</Button >
            </HStack>
            <Chart Img={Employee} />
        </VStack>
    )
}

export default Profitablity