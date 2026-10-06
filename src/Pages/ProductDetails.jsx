import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';

const ProductDetails = () => {
    return (
        <section className='py-5'>
            <div className='container'>
                <Breadcrumbs aria-label="breadcrumb">
                <Link
                    underline="hover"
                    color="inherit"
                    to="/"
                    className="link transition"
                >
                    Home
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    to="/material-ui/getting-started/installation/"
                    className="link transition"
                >
                    Fashion
                </Link>
                </Breadcrumbs>
            </div>
        </section>
    )
}

export default ProductDetails
