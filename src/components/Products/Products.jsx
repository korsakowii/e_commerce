import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

const products = [
    { id: 1, name: 'Air Purifier', description: 'Air purifier, used twice', price: '$50', image: 'https://images-na.ssl-images-amazon.com/images/I/81ZOioO6M4L._AC_SL1500_.jpg' },
    { id: 2, name: 'Shelf', description: 'Steel shelf, opened but never used', price: '$5', image: 'https://www.ikea.com/us/en/images/products/omar-1-section-shelving-unit__0912296_pe691230_s5.jpg?f=g' },
];

const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    );
}

export default Products;