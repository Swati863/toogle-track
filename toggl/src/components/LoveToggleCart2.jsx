import { Text, VStack, Image } from '@chakra-ui/react'
import React from 'react'
import { BsFillCaretRightFill, BsStarFill } from 'react-icons/bs'

const LoveToggleCart2 = ({ Img, Color, para, desc, about }) => {
    return (

        <VStack justify={'space-between'} h={'31.5rem'} background={Color} w={'50%'} p={'2rem 0rem'} borderRadius={'1rem'}  >
            <Text fontSize={'1.8rem'} w={'36rem'} textAlign={'start'} fontWeight={'600'}>
                {para}
            </Text>
            <Image src={Img} w={'65%'} />
            <Text fontSize={'1.15rem'} w={'88%'} textAlign={'start'} fontWeight={'500'} >
                {desc}
            </Text>
            <Text color={'#6b5a74'} align={'center'} gap={'0.5rem'} display='flex' fontSize={'0.9rem'} width={'86%'} fontWeight={600} textAlign={'start'}>
                <BsStarFill style={{ width: '14px', height: '14px', display: 'inline' }} />
                <BsStarFill style={{ width: '14px', height: '14px', display: 'inline' }} />
                <BsStarFill style={{ width: '14px', height: '14px', display: 'inline' }} />
                <BsStarFill style={{ width: '14px', height: '14px', display: 'inline' }} />
                <BsStarFill style={{ width: '14px', height: '14px', display: 'inline' }} />
                5/5 stars on G2.com
            </Text>
            <Text color={'#6b5a74'} fontSize={'1rem'} textAlign={'start'} w={'87%'}>
                {about}
            </Text>
        </VStack>
    )
}

export default LoveToggleCart2