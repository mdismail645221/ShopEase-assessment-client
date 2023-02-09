import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'


const auth = getAuth(app)
const AUTHCONTEXT = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)

    const registerSigin = (email, password) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
    }



    const authInfo = {}
    return (
        <AUTHCONTEXT.Provider value={authInfo}>
            {children}
        </AUTHCONTEXT.Provider>
    );
};

export default AuthProvider;