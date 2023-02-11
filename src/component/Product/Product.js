import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AUTHCONTEXT } from '../../context/AuthProvider';



const Product = ({ product }) => {
    const {user} = useContext(AUTHCONTEXT)
    // console.log("product", user)
    const navigate = useNavigate()


    const { image, model, price, rating, keyFeature } = product;


    // product save user info
    const handleSaveProduct = (product) => {

        const productInfo = {...product, email: user?.email, userName: user?.displayName}
        console.log("productInfo", productInfo)

        if(productInfo){
            fetch(`http://localhost:5000/products`, {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(productInfo)
            })
        }else{
            toast.error("Error")
            navigate('/register')
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