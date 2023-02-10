import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/products`)
        .then(res=> res.json())
        .then(data=> console.log(data.data))
    }, [])

    // console.log(products)


    return (
        <Box>
            kjkjh
        </Box>
    );
};

export default Home;