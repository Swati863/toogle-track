import React, { useState } from 'react'
import { Formik, Field } from "formik";
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    VStack,
    Text,
    InputGroup,
    InputRightElement,
    Center
} from "@chakra-ui/react";
import { useUserContext } from '../Context/userContext';
import { useToast } from '@chakra-ui/react'
import { BiHide, BiShow } from "react-icons/bi"

const Form = ({ title }) => {

    const [data, setData] = useState({ email: "", password: "" });
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    const { signupUser, user } = useUserContext()


    return (
        <Flex align="center" justify="center" my={5}>
            <Box rounded="md" w="90%" pb={10}>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    onSubmit={(values) => {
                        setData(values)
                        signupUser(values.email, values.password)
                    }}
                >
                    {({ handleSubmit, errors, touched }) => (
                        <form onSubmit={handleSubmit}>
                            <VStack spacing={8} align="flex-start">
                                <FormControl isInvalid={!!errors.email && touched.email}>

                                    <FormLabel htmlFor="email" >Email</FormLabel>
                                    <Field
                                        as={Input}
                                        id="email"
                                        name="email"
                                        type="email"
                                        bg="white"
                                        color="black"
                                        variant='outline'
                                        size='lg'
                                        border="2.5px solid black"
                                        _hover={{ background: "#ffebd7", color: "black" }}
                                        validate={(value) => {
                                            let error;
                                            if (!value) {
                                                error = 'Required';
                                            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
                                                error = 'Invalid email address';
                                            }
                                            return error;
                                        }}
                                    />

                                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                                </FormControl>
                                <FormControl isInvalid={!!errors.password && touched.password}>
                                    <FormLabel htmlFor="password">Password</FormLabel>
                                    <InputGroup>
                                        <Field
                                            as={Input}
                                            id="password"
                                            name="password"
                                            type={show ? 'text' : 'password'}
                                            size='lg'
                                            bg="white"
                                            color="black"
                                            border="2.5px solid black"
                                            _hover={{ background: "#ffebd7", color: "black" }}
                                            validate={(value) => {
                                                let error;

                                                if (value.length < 7) {
                                                    error = "Password must contain at least 8 characters";
                                                }

                                                return error;
                                            }}
                                        />
                                        <InputRightElement width='4.5rem'  >
                                            <Center fontSize="30px" pt={2} bg="none" onClick={handleClick}>
                                                {show ? <BiHide color='black' /> : <BiShow color='black' bg="black" />}
                                            </Center>
                                        </InputRightElement>
                                    </InputGroup>
                                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                                </FormControl>
                                <Button h="48px" type="submit" bg="#E57CD8" width="full" borderRadius="3xl" _hover={{ bg: "#640090" }}>
                                    {title}
                                </Button>
                            </VStack>
                        </form>
                    )}
                </Formik>
            </Box>
        </Flex>
    );

}

export default Form
