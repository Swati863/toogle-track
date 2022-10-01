import { Button, HStack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react';
import Rotate from './Rotate'
import Chart from './Chart'
import employee from '../Images/employee-time-tracking.avif'
import billing from '../Images/billing-invoicing.avif'
import payroll from '../Images/payroll.avif'
import reporting from '../Images/reporting.avif'
import project from '../Images/project-budgeting.avif'
const profitability = [
    {
        button: 'Employee time tracking',
        head: 'Make timesheets history.',
        para1: "Get the data you need without disrupting your team's workflow. Track's one-click time tracking syncs across multiple platforms.",
        para2: "Get employee buy-in with a tool designed to empower teams with knowledge, not micromanage them.",
        Img: employee
    },
    {
        button: 'Billing & invocing',
        head: 'Get paid for every billable hour.',
        para1: "Track billable hours for projects and clients as you go. Invoice clients for the exact time you put in.",
        para2: "Keep clients happy with transparent records of how biilable hours were spent.",
        Img: billing
    },
    {
        button: 'Project budgeting',
        head: 'Keep projects profitable. Keep employees happy.',
        para1: "Create realistic project scopes based on time tracking data. Manage team workloads to prevent burnout.",
        para2: "Don’t turn projects in late, and don’t let projects turn unprofitable. Track budgets, labor costs, project hours and estimates in real time.",
        Img: project
    },
    {
        button: 'Reporting',
        head: 'Get actionable insights into projects and keep stakeholders informed.',
        para1: "Fine-tune your pricing, prioritize, and grow your business with profitability projections, earning-per-client data, ROI reports and other key insights.",
        para2: "Communicate progress to clients and stakeholders and build trust with beautiful, ready-to-share reports.",
        Img: reporting
    },
    {
        button: 'Payroll',
        head: 'Pay employees and contractors on time.',
        para1: "Easy, fast, and fuss-free payroll based on billable hours tracked",
        para2: "Assign billable rates to view reliable payroll data linked to every employee and contractor.",
        Img: payroll
    },
]

const Profitablity = () => {
    const [pData, setPData] = useState(profitability[0]);
    const [match, IsMatch] = useState(profitability[0].button);
    const handleClick = (d) => {
        setPData(d);
        IsMatch(d.button)
        console.log(match == d.button);
    };
    return (
        <VStack align={'center'} pb={'5rem'} background={'#fef6f3'} w={'100%'} pt={'6rem'} pl={'3.5rem'} pr={'3.5rem'}>
            <Text fontSize={'2.8rem'} fontWeight={'600'} w={'80%'} >
                Time tracking for all your productivity and profitability needs
            </Text>
            <HStack gap={'0.5rem'} mt={'3.5rem !important'} mb={'3.5rem !important'}>
                {profitability.map((el) => {
                    return <Button p='1.6rem 1.9rem' onClick={() => handleClick(el)}
                        style={match == el.button ? {
                            background: '#2c1338',
                            color: '#ffebbd',
                        } : {
                            background: '#ffebbd',
                            color: '#2c1338'
                        }}
                        fontWeight={'700'} _hover={{
                            background: '#7e6e85'
                        }} fontSize={'1.14rem'} borderRadius={'3rem'} >{match == el.button ? el.button.split(" ").map((E) => (
                            <>
                                <Rotate Color={'#ffebbd'} word={E} />
                                {'\u00A0'}
                            </>

                        )
                        ) : el.button} </Button >
                })}

            </HStack>

            <Chart Img={pData.Img} head={pData.head} para1={pData.para1} para2={pData.para2} />
        </VStack>
    )
}


{/* <Button p='1.6rem 1.9rem' fontWeight={'700'} _hover={{
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
                }} fontSize={'1.14rem'} color='#2c1338' background={'#ffebbd'} borderRadius={'3rem'} >Payroll</Button > */}
export default Profitablity