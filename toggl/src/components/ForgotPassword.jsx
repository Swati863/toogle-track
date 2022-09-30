import { AspectRatio, Box, Button, Heading, Input, Text, useToast } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { useUserContext } from '../Context/userContext'
import Styles from "./Video.module.css"

const ForgotPassword = () => {

    const [email, setEmail] = useState("")
    const { forgotPassword, logoutUser, user, error } = useUserContext()


    const vidRef = useRef(null);

    const handleChange = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        forgotPassword(email)
    }

    useEffect(() => { vidRef.current.play(); }, []);

    return (
        <Box w="100%">
            <video
                src="https://public-assets.toggl.com/b/static/hero-bg-video-track-61631b1f2e56d5764d4a4866af68ea9a.mp4"
                ref={vidRef}
                muted
                autoPlay
                loop
                preload="auto"
                className={Styles.video}
            />
            <Box>
                <Box position="absolute" left="45%" top="20%">
                    <Heading size="3xl" color="#E57CD8">𝘿𝙖𝙣𝙜.</Heading>
                    <Text mt={5} fontSize="xl">Forgot your password, eh?</Text>
                </Box>
                <Box w="45%" m="auto" bg="#2C1118" p={10} position="absolute" top="40%" left="30%" textAlign="left">
                    <form onSubmit={handleSubmit}>
                        <Text my={3}>Email</Text>
                        <Input mb={8} w="90%" placeholder='Email' variant='outline' size='lg' border="2.5px solid black"
                            _hover={{ background: "#ffebd7", color: "black" }} onChange={handleChange} />
                        <Button w="90%" h="48px" type="submit" bg="#E57CD8" borderRadius="3xl">
                            Reset Password
                        </Button>
                        <Button onClick={logoutUser}>Logout</Button>
                    </form>
                </Box>
            </Box>
        </Box>
    )
}

export default ForgotPassword
