import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { useToast } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import { async } from "@firebase/util";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { loginApi, signupApi } from "../store/auth/auth.action";



const userContext = createContext({});

export const useUserContext = () => useContext(userContext)

export const UserContextProvider = ({ children }) => {

    //#################### reducer logic ####################
    const { token } = useSelector((store) => store.auth)
    const dispatch = useDispatch()

    //#################### reducer logic ####################

    const toast = useToast()
    const navigate = useNavigate()

    const [user, setUser] = useState(null)
    const [loading, SetLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        SetLoading(true);
        const unSubscribe = onAuthStateChanged(auth, (res) => {
            res ? setUser(res) : setUser(null);
            setError(false)
            SetLoading(false)
        })

        return unSubscribe
    }, [])


    // ############### Signup User ########################

    const signupUser = (email, password) => {

        SetLoading(true);
        createUserWithEmailAndPassword(auth, email, password).then(() => {
            return updateProfile(auth.currentUser, {
                displayName: "Gautam"
            })
        }).then((res) => {
            console.log(email, "inside firebase", password)
            dispatch(signupApi({ email, password }))

            setUser(res);
            toast({
                title: 'Account created.',
                description: "We've created your account for you.",
                status: 'success',
                duration: 5000,
                isClosable: true,
                position: 'top'
            })


            setTimeout(() => {
                navigate("/login")
            }, 1000)

        })
            .catch((er) => {
                setError(er.message)
                toast({
                    title: 'Error',
                    description: `${er.message}.`,
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                    position: 'top'
                })
            })
            .finally(() => SetLoading(false))
    };


    // ############### Login User ########################

    const loginUser = (email, password) => {
        SetLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                setUser(res);
                toast({
                    title: 'Login Successful',
                    description: "You have Successfully Login.",
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                    position: 'top'
                })

                dispatch(loginApi({ email, password }))

                setTimeout(() => {
                    navigate("/timer")
                }, 1000)
            })
            .catch((er) => {
                setError(er.message)
                toast({
                    title: 'Error',
                    description: `${er.message}.`,
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                    position: 'top'
                })
            })
            .finally(() => SetLoading(false))
    }

    // ############### Logout User ########################

    const logoutUser = () => {
        signOut(auth).then((res) => {
            setUser(res)
            toast({
                title: 'Logout Successful',
                description: "You have Successfully Logout.",
                status: 'success',
                duration: 5000,
                isClosable: true,
                position: 'top'
            })
            setTimeout(() => {
                navigate("/login")
            }, 1000)
        })
            .catch((er) => {
                setError(er.message)
                toast({
                    title: 'Error',
                    description: `${er.message}.`,
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                    position: 'top'
                })
            })
            .finally(() => SetLoading(false))

    };


    // ############### Forgot Password ########################

    const forgotPassword = (email) => {
        sendPasswordResetEmail(auth, email)
            .then((res) => {
                setUser(res);
                toast({
                    title: 'Forgot Password',
                    description: `Reset link has been send to your resigtered email id ${email}`,
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                    position: 'top'
                })
                setTimeout(() => {
                    navigate("/login")
                }, 2000)
            })
            .catch((er) => {
                setError(er.message)
                toast({
                    title: 'Error',
                    description: `${er.message}.`,
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                    position: 'top'
                })
            })
            .finally(() => SetLoading(false))
    }

    // ############### Signin with google ########################

    const signInWithGoogle = () => {
        SetLoading(true);
        signInWithPopup(auth, new GoogleAuthProvider)
            .then((res) => {
                setUser(res);
                toast({
                    title: 'Login Successfull',
                    description: "You have Successfully Login.",
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                    position: 'top'
                })
                setTimeout(() => {
                    navigate("/")
                }, 1000)
            })
            .catch((er) => {
                setError(er.message)
                toast({
                    title: 'Error',
                    description: `${er.message}.`,
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                    position: 'top'
                })
            })
            .finally(() => SetLoading(false))
    }

    const contextValue = {
        user,
        loading,
        error,
        signupUser,
        loginUser,
        logoutUser,
        forgotPassword,
        signInWithGoogle
    };



    return (
        <userContext.Provider value={contextValue}>
            {children}
        </userContext.Provider>
    )
}