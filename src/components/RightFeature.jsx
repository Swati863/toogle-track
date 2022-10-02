import React, { useState } from 'react'
import { Button, HStack, Text, VStack } from '@chakra-ui/react'
import freelance from '../Images/freelancer.avif'
import agency from '../Images/agency.avif'
import enterprise from '../Images/enterprise.avif'
import ChartFeatures from './ChartFeatures'
import Rotate from './Rotate'
const rightFeatures = [
    {
        button: 'Freelancers',
        head: 'Need time tracking that helps you stay productive and bill clients accurately?',
        para: '"Toggl Track is indispensable for keeping track of my hours by project so I can create invoices. It makes it easy to calculate the time I need for certain types of work. All in all, it is the best way to accurately prepare your financial claims."',
        editor: "Ema N. (Editor)",
        Img: freelance
    },
    {
        button: 'Agencies & professoinal services',
        head: 'Need a simpler way to scope projects and track billable hours?',
        para: '"Excellent time tracking and overview of project management. Toggl Track helps us drive insights about how to better allocate time and energy to make the business grow."',
        editor: "Lisandro R. (Marketing)",
        Img: agency
    },
    {
        button: 'Enterprise teams',
        head: 'Need fuss-free time tracking that gets you accurate data for easy analysis?',
        para: '"This is a very useful tool for our organization as it allows us to keep a detailed record of the time invested by each of our collaborators. We work with several contractors and it allows us to measure efficiencies and delays for every single employee."',
        editor: "Lisandro R. (Marketing)",
        Img: enterprise
    },

]
const RightFeature = () => {
    const [rData, setRData] = useState(rightFeatures[0]);
    const [match, IsMatch] = useState(rightFeatures[0].button);
    const handleClick = (d) => {
        setRData(d);
        IsMatch(d.button)
        console.log(match == d.button);
    };
    return (
        <VStack align={'self-start'} textAlign={'start'} pb={'5rem'} mt={'0rem !important'} background={'#fefbfa'} w={'100%'} pt={'6rem'} pl={'3.5rem'} pr={'3.5rem'}>
            <Text color={'#2c1338'} fontSize={'2.8rem'} fontWeight={'600'} w={'80%'} >
                The right feature set for <Rotate word={'every'} Color={'#2c1338'} /> team
            </Text>
            <HStack gap={'0.5rem'} mt={'3rem !important'} mb={'3.5rem !important'}>
                {rightFeatures.map((el) => {
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
            <ChartFeatures Img={rData.Img} head={rData.head} para={rData.para} editor={rData.editor} />
        </VStack>
    )
}

export default RightFeature