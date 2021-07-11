import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

//const products = [
//    { id: 1, name: 'Air Purifier', description: 'Air purifier, used twice', price: '$50', image: 'https://images-na.ssl-images-amazon.com/images/I/81ZOioO6M4L._AC_SL1500_.jpg' },
//    { id: 2, name: 'Shelf', description: 'Steel shelf, opened but never used', price: '$5', image: 'https://www.ikea.com/us/en/images/products/omar-shelf-unit-galvanized__0626610_ph124828_s5.jpg?f=xl' },
//    { id: 3, name: 'Dyson v7', description: 'Used <2 years, some scratches on the sticker', price: '$160', image: 'https://images-na.ssl-images-amazon.com/images/I/91H6nHdsl4L._AC_SL1500_.jpg' },
//];

const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
}

export default Products;