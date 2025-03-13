import React from 'react'
import { Card, CardContent, CardMedia, Typography, Button, Link } from '@mui/material'

const ProductCard = ({ product }) => {

    const splitURLText = product.alt?.split(":");
    const { name, description, image, price, rating, alt } = product;

  return (
    <>
    <Card>
        <CardMedia 
        component="img"
        height="280"
        image={image}
        title={alt}
        alt={name}
         />
         <CardContent>
            <Typography variant='h6'>{name}</Typography>
            <Typography variant='body2'>{description}</Typography>
            <Typography variant='h6'>${price}</Typography>
            <Typography variant='body2'>Rating: {rating}</Typography>
            <Typography variant='body2' sx={{ mt: 1 }}>
                { splitURLText && (
                    <Link color='primary'
                    href={`${splitURLText[1]}: ${splitURLText[2]}`}>{splitURLText[0]}</Link>
                )}
            </Typography>
            <Button variant='contained'
            color='primary'
            style={{ marginTop: '10px' }}>Buy Now</Button>
         </CardContent>
    </Card>
    </>
  )
}

export default ProductCard