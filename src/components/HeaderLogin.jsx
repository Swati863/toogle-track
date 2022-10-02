import { FormControl, Button, FormErrorMessage, HStack, Input, InputGroup, InputRightElement, Text, VStack, Box, background } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { BsFillEyeFill, BsFillEyeSlashFill, BsGoogle, BsApple } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../Context/userContext';
import styles from './HeaderLogin.module.css'
import Form from './SignupForm';

const HeaderLogin = () => {
    const { signInWithGoogle } = useUserContext()
    const [input, setInput] = useState('');
    const redirect = useNavigate();
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const isError = useRef(false);;
    const handleInputChange = (e) => {

        setInput(e.target.value);
        isError.current = e.target.value === '';
    }
    // const 
    return (
        <VStack w="100%" align='flex-start' >
            <div style={{
                width: '100%'
            }}>
                <FormControl w='70%' isInvalid={isError.current} >
                    <Input
                        _focus={{
                            border: '1px solid #FCE5D8',
                            background: '#FCE5D8',
                            color: 'black',
                            borderRadius: '0.3rem'
                        }}
                        borderRadius={'0rem'}
                        padding='1.6rem 1rem'
                        type='email'
                        placeholder='Email'
                        value={input}
                        onInput={handleInputChange}
                        onFocus={() => {
                            isError.current = input === ''
                            console.log(isError.current);
                        }}
                    />
                    {!isError.current ? (
                        <p></p>
                    ) : (
                        <FormErrorMessage fontSize='1.3rem' color="red">Required</FormErrorMessage>
                    )}

                    <InputGroup mt={'2rem'}>
                        <Input
                            _focus={{
                                border: '1px solid #FCE5D8',
                                background: '#FCE5D8',
                                color: 'black',
                                borderRadius: '0.3rem'
                            }}
                            borderRadius={'0rem'}
                            padding='1.6rem 1rem'
                            type={show ? 'text' : 'password'}
                            placeholder='A strong password'
                        />
                        <InputRightElement width='3.5rem' h='100%' fontSize={'1.8rem'} >
                            {show ? (
                                <BsFillEyeFill onClick={handleClick} cursor={'pointer'} fill={'#7e6e85'} />
                            ) : (
                                <BsFillEyeSlashFill onClick={handleClick} cursor={'pointer'} fill={'#7e6e85'} />
                            )
                            }
                        </InputRightElement>
                    </InputGroup>
                </FormControl>
            </div >

            <HStack w='100%' justify={'space-between'} marginTop={'2.5rem !important'}>
                <Button p='1.8rem 2.8rem' onClick={() => redirect('/signup')} fontWeight={'700'} _hover={{
                    background: '#7e6e85'
                }} color='white' background={'#e57cd8'} borderRadius={'3rem'} >Sign up with email</Button>
                <HStack>
                    <Text style={{
                        wordSpacing: '0.4rem'
                    }} fontWeight={'500'} color={'#FCE5D8'}>Or Signup with:</Text>

                    <Box style={{
                        border: '1px solid #FCE5D8',
                        padding: '1rem',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        fontSize: '1.7rem'
                    }}
                        onClick={signInWithGoogle}
                        _hover={{
                            background: '#FCE5D8',
                        }}
                    >
                        <BsGoogle style={{
                            fill: '#FCE5D8'
                        }} className={styles.logo} />
                    </Box>
                    <Box style={{
                        border: '1px solid #FCE5D8',
                        padding: '1rem',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        fontSize: '1.7rem'
                    }}
                        onClick={signInWithGoogle}
                        _hover={{
                            background: '#FCE5D8',
                        }}
                    >
                        <BsApple style={{
                            fill: '#FCE5D8'
                        }} className={styles.logo} />
                    </Box>
                </HStack>
            </HStack >
        </VStack >
    )
}

export default HeaderLogin