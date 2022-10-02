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
    Center,

} from "@chakra-ui/react";
import { useUserContext } from '../Context/userContext';
import { Link } from 'react-router-dom';
import { BiHide, BiShow } from "react-icons/bi"

const LoginForm = ({ title }) => {

    const [data, setData] = useState({ email: "", password: "" });
    const { loginUser, forgotPassword, user, error } = useUserContext()

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)


    // console.log(error)
    // console.log(user?._tokenResponse?.registered)



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
                        loginUser(values.email, values.password);
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
                                <Flex justify="right" w="100%">
                                    <Link to="/forgot_password">
                                        <Text w="fit-content" borderBottom="1px solid #E57CD8" _hover={{ color: "#E57CD8" }}>Forgot password?</Text>
                                    </Link>
                                </Flex>
                                <Button h="48px" _hover={{ bg: "#640090" }} type="submit" bg="#E57CD8" width="full" borderRadius="3xl">
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

export default LoginForm;
