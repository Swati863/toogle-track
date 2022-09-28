import { HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Rotate from './Rotate'
import billable from '../Images/billable.avif';
import speedup from '../Images/speedup.avif';
import welcome from '../Images/welcome.avif';
import experience from '../Images/experience.avif';
import LoveToggleCart1 from './LoveToggleCart1';
import LoveToggleCart2 from './LoveToggleCart2';
const Cart1 = [
    {
        para: 'Users report up to 25% increase in billable hours with accurate time tracking that accounts for every minute spent on client work.',
        img: billable,
        Color: '#f7d8f3',
    },
    {
        para: 'Speed up team adoption with an anti-surveillance platform that gets a "yes" from every employee.',
        img: speedup,
        Color: '#fce5d8',
    }
]
const Cart2 = [
    {
        para: 'No training necessary. Get started right away with intuitive and welcoming features.',
        img: welcome,
        Color: '#fce5d8',
        desc: '“The acceptance from all users is very high. I have seen a 40+ year employee move from their Excel-based tracking they have used forever, to this tool without any issue.”'
    },
    {
        para: 'Make time tracking and reporting a breeze with a beautifully-designed app experience.',
        img: experience,
        Color: '#fff2d3',
        desc: "“I love that i'ts simple and the aesthetic is beautiful. It's really intuitive and not super complicated.”"
    }
]
const LoveToggl = () => {
    return (
        <VStack align={'center'} gap={'1.3rem'} color={'white'} pb={'5rem'} w={'100%'} pt={'6rem'} pl={'3.5rem'} pr={'3.5rem'}>
            <Text fontSize={'2.8rem'} fontWeight={'600'} w={'80%'} >
                Why do teams <Rotate word={'love'} /> Toggl Track?
            </Text>
            <HStack gap={'1.2rem'} w={'100%'} color={'black'} justify={'space-between'} >
                {
                    Cart1.map((el) => <LoveToggleCart1 Img={el.img} Color={el.Color} para={el.para} />)
                }

            </HStack>
            <HStack gap={'1.2rem'} w={'100%'} color={'black'} justify={'space-between'} >
                {
                    Cart2.map((el) => <LoveToggleCart2 Img={el.img} desc={el.desc} Color={el.Color} para={el.para} />)
                }

            </HStack>
        </VStack>
    )
}

export default LoveToggl