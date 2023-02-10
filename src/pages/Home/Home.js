import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import LoadingAnimation from '../../component/LoadingAnimation/LoadingAnimation';
import Product from '../../component/Product/Product';

const Home = () => {
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setLoading(true)
        fetch(`http://localhost:5000/products`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.data)
                setLoading(false)
            })
    }, [])


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