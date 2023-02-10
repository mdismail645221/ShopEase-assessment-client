import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, updateProfile} from 'firebase/auth'


const auth = getAuth(app)
export const AUTHCONTEXT = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState("")
    const [loading, setLoading] = useState(false)


// REGISTER COMPOENT FIREBASE HOOKS

// user register in firebase
    const registerSigin = (email, password) => {
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }

    // update USER NAME & image  in firebase
    const updateUser = (userInfo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, userInfo);
    }

    // signGoogle
    const provider = new GoogleAuthProvider();
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }



    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, (currentUser) => {
            
                console.log('onAuthStateChanged current User', currentUser);
                setUser(currentUser)
                setLoading(false)
        
        })

        return () => {
            unSubscribed()
        }

    }, [])





    const authInfo = {
        user, 
        registerSigin, 
        updateUser,
        loading,
        googleSignIn
    }
    return (
        <AUTHCONTEXT.Provider value={authInfo}>
            {children}
        </AUTHCONTEXT.Provider>
    );
};

export default AuthProvider;