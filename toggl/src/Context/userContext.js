import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";

const userContext = createContext({});

export const useUserContext = () => useContext(userContext)

export const UserContextProvider = ({ children }) => {

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



    const signupUser = (email, password) => {
        SetLoading(true);
        createUserWithEmailAndPassword(auth, email, password).then(() => {
            return updateProfile(auth.currentUser, {
                displayName: "Gautam"
            })
        }).then((res) => console.log(res)).catch((er) => setError(er.message)).finally(() => SetLoading(false))
    };


    const loginUser = (email, password) => {
        SetLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => console.log(res)).catch((er) => setError(er.message)).finally(() => SetLoading(false))
    }

    const logoutUser = () => {
        signOut(auth)
    };

    const forgotPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    const contextValue = {
        user,
        loading,
        error,
        signupUser,
        loginUser,
        logoutUser,
        forgotPassword
    };



    return (
        <userContext.Provider value={contextValue}>
            {children}
        </userContext.Provider>
    )
}