import React, { useContext } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import LoadingAnimation from '../component/LoadingAnimation/LoadingAnimation';
import { AUTHCONTEXT } from '../context/AuthProvider';
// import React, { useContext } from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import Loading from '../components/Loading/Loading';
// import { AuthContext } from '../context/AuthProvider';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AUTHCONTEXT);
    const location = useLocation();

    if(loading){
        return <LoadingAnimation></LoadingAnimation>
    }

    if(!user){
        return <Navigate to="/login" state={{from: location}} replace />
    }

    return children
    
};

export default PrivateRoute;