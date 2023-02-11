import { Box } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import LoadingAnimation from '../../component/LoadingAnimation/LoadingAnimation';
import Product from '../../component/Product/Product';
import { AUTHCONTEXT } from '../../context/AuthProvider';

const Home = () => {
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([]);
    const {user} = useContext(AUTHCONTEXT)

    useEffect(() => {
        setLoading(true)
        fetch(`http://localhost:5000/products`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("jwt-token")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setProducts(data.data)
                setLoading(false)
            })
    }, [user])


    if(loading){
        return <LoadingAnimation/>
    }

    return (
        <Box sx={{marginTop: '80px'}}>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center align-middle'>
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </Box>
    );
};

export default Home;