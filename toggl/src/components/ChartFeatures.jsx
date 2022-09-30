import React from 'react'
import { HStack, Button, Image, Text, VStack, Divider } from '@chakra-ui/react'
import { BsFillCaretRightFill } from 'react-icons/bs'
const ChartFeatures = ({ head, Img, para, editor }) => {
    return (
        <HStack align={'self-start'} borderRadius={'1rem'} pb={'2rem'} color='black' >
            <VStack gap={'2rem'} textAlign={'start'} align={'flex-start'} p={'1rem  0rem'} w={'40rem'} >
                <Text w={'69%'} fontSize={'2rem'} fontWeight={'600'}>{head}</Text>
                <Text color={'#e57cd8'} fontSize={'1.2rem'} ><a href="#">Learn how Toggle Track can help you <BsFillCaretRightFill style={{
                    display: 'inline',
                    width: '11px',
                    height: '11px',
                }}
                /></a></Text>
                <HStack>
                    <Divider background={'black'} orientation='vertical' height={'12rem'} w={'9px'} />
                    <VStack align={'flex-start'} ml={'2rem !important'}>
                        <Text w={'65%'} fontSize={'1.13rem'}>
                            {para}
                        </Text>
                        <Text w={'50%'} fontWeight={'600'} color={'#717171'} fontSize={'1.2rem'}>
                            {editor}
                        </Text>
                    </VStack>
                </HStack>
            </VStack>
            <VStack w={'60%'}>
                <Image src={Img} w={'94%'} />
            </VStack>
        </HStack >
    )
}

export default ChartFeatures