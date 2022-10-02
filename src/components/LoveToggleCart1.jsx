import { Text, VStack, Image } from '@chakra-ui/react'
import React from 'react'
import { BsFillCaretRightFill } from 'react-icons/bs'

const LoveToggleCart1 = ({ Img,Color,para }) => {
  return (

    <VStack justify={'space-between'} h={'32rem'} background={Color} w={'50%'} p={'2rem 0rem'} borderRadius={'1rem'}  >
      <Text fontSize={'1.8rem'} w={'36rem'} textAlign={'start'} fontWeight={'600'}>
       {para}
        <a href="#" style={{
              fontSize: '1.3rem',
              marginLeft: '1rem',
        }}>Learn more <BsFillCaretRightFill style={{
          display: 'inline',
          width:'11px',
          height:'11px',
        }} /> </a>
      </Text>
      <Image src={Img} w={'65%'} />
    </VStack>
  )
}

export default LoveToggleCart1