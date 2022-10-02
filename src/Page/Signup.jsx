import { Box, Flex, Heading, Image, Input, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { NavLink, redirect, useNavigate } from 'react-router-dom'
import Form from '../components/SignupForm'
import LogoButton from '../components/LogoButton'
import { useUserContext } from '../Context/userContext'
import Styles from "./Signup.module.css"
import Rotate from '../components/Rotate'

const Signup = () => {

    const { user } = useUserContext();
    const redirect = useNavigate()


    return (
        <Box bg="rgb(65,42,76)" pb={10} >
            <Box p={12} onClick={() => redirect("/")}>
                <Image w="13%" src="https://toggl.com/blog/wp-content/uploads/2020/09/toggl-track_logotype_horizontal_pink_rgb-e1599116263835.png" />
            </Box>
            <Box textAlign="left" w="80%" m="auto" color="white">
                <Heading size="2xl">Sign up for a <span style={{ color: "#E57CD8" }}><Rotate Color={"#E57CD8"} word={"free"} /></span>  Toggl Track account</Heading>

                <Text fontSize="xl" mt={10}>All plans come with a free, 30-day trial of Toggl Track Premium—no credit card required.
                    <br />
                    Upgrade at the end of the trial or continue using Track for free.
                </Text>

                <Text fontSize="xl" my={4}>Already have an account?
                    <NavLink style={{ color: "#E57CD8", marginLeft: "5px", textDecoration: "underline" }} to="/login" >Log in here.</NavLink>
                </Text>
            </Box>
            <SimpleGrid columns={[1, 2]} spacing={10} w={["90%", "80%"]} m="auto" my={14} color="white">
                <Box bg="rgb(44, 19, 56)" textAlign="left" p={5} py={14} >
                    <Flex justify="space-around">
                        <LogoButton logo="https://img.icons8.com/color/452/google-logo.png" title="Sign up via google" />
                        <LogoButton logo="https://cdn.iconscout.com/icon/free/png-256/apple-853-675472.png" title="Sign up via Apple" />
                    </Flex>
                    <Flex align="center" justify="space-around" mt={8}>
                        <Box borderBottom="2px solid gray" w="42%"></Box>
                        <Text fontWeight="bold"  >OR</Text>
                        <Box borderBottom="2px solid gray" w="42%"></Box>
                    </Flex>
                    <Box >
                        <Form title="Sign up via email" />
                    </Box>
                    <Box>
                        <Text fontSize='sm'>By signing up, you agree to our <span style={{ color: "#E57CD8", textDecoration: "underline" }}>terms of service,</span> <span style={{ color: "#E57CD8", textDecoration: "underline" }}>privacy policy</span> and to receiving
                            <br />
                            marketing communication from Toggl Track. You can opt out anytime.
                        </Text>
                    </Box>
                </Box>
                <Box textAlign="left" w="90%" ml={10}>
                    <Box>
                        <Text fontSize="80px" mb={-10}>❝</Text>
                        <Text fontSize="20px" fontWeight="bold">
                            Toggl Track has a very straightforward
                            <br />
                            interface. It's easy to start, stop and edit <br /> time entries and to review your own <br /> work and the work of colleagues.
                        </Text>
                        <Text fontSize="20px" fontWeight="bold" my={5}>
                            <span style={{ color: "#FFDE91" }}>𝙄𝙩 𝙟𝙪𝙨𝙩 𝙬𝙤𝙧𝙠𝙨,</span> even in a team where <br /> some members find new interfaces <br /> challenging.
                        </Text>
                        — Verified G2Crowd review. 5/5 stars.
                    </Box>
                    <Box mt={16}>
                        <Image src="https://public-assets.toggl.com/b/static/6b5c09dd5baafcca069103cd517b38c9/67548/review-badges.avif" />
                    </Box>
                </Box>

            </SimpleGrid>
        </Box>
    )
}

export default Signup
