import React, { useEffect, useState, useContext } from 'react';
import {AUTHCONTEXT} from '../../context/AuthProvider'

const UserSaveCart = () => {
    const {user} = useContext(AUTHCONTEXT)
    console.log("saveCart", user.email)
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/userProduct?email=${user?.email}`)
        .then(res => res.json())
        .then(data => console.log("UserSaveCart", data))
    }, [user.email])


    return (
        <div>
            6546514631
        </div>
    );
};

export default UserSaveCart;