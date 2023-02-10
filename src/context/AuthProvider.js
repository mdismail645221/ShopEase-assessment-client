import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, updateProfile} from 'firebase/auth'


const auth = getAuth(app)
export const AUTHCONTEXT = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({user: "raju"})
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
    }
    return (
        <AUTHCONTEXT.Provider value={authInfo}>
            {children}
        </AUTHCONTEXT.Provider>
    );
};

export default AuthProvider;