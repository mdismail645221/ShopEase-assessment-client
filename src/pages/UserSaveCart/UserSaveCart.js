import React, { useEffect, useState, useContext } from 'react';
import Product from '../../component/Product/Product';
import {AUTHCONTEXT} from '../../context/AuthProvider'

const UserSaveCart = () => {
    const {user} = useContext(AUTHCONTEXT)
    // console.log("saveCart", user.email)
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/userProduct?email=${user?.email}`)
        .then(res => res.json())
            .then(data => setProducts(data.data))
    }, [user])

    console.log("saveCart", products)


    return (
        <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center align-middle'>
            {
                products.map(product => <Product key={product._id} product={product}></Product>)
            }
        </div>
    );
};

export default UserSaveCart;