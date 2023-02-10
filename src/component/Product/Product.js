import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { AUTHCONTEXT } from '../../context/AuthProvider';



const Product = ({ product }) => {
    const {user} = useContext(AUTHCONTEXT)
    console.log("product", user)


    const { image, model, price, rating, keyFeature } = product;


    // product save user info
    const handleSaveProduct = (product) => {

        if(product){
            fetch(`http://localhost:5000/products`, {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(product)
            })
        }
    }


    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {model}
                </Typography>
                {/* {
                    keyFeature.map(description => <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>)
                } */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem' }}>
                    <Typography gutterBottom variant="h5" component="div">
                        <span>Prize: {price}</span>
                    </Typography>
                    <Typography sx={{ display: 'flex', alignItems: 'center' }} gutterBottom variant="h6" component="span">
                        <span className='tex'>rating: {rating}</span>
                    </Typography>
                </Box>
            </CardContent>
            <CardActions sx={{
                '& .css-105q9jb-MuiButtonBase-root-MuiButton-root': {
                    padding: '5px 8px',
                }
            }} onClick={() => handleSaveProduct(product)}>
                <Button variant="contained" size="small">
                    Save Cart
                </Button>
            </CardActions>
        </Card>
    );
};

export default Product;