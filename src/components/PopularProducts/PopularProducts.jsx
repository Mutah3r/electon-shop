import React, { useContext } from 'react';
import { ProductsContext } from '../../App';
import './PopularProducts.css'
import Card from '../Card/Card';

const PopularProducts = () => {
    const products = useContext(ProductsContext);
    
    return (
        <div className='popular-products-wrapper'>
            <h2>Popular products</h2>
            <div className="popular-products">
                {
                    products.map(product => <Card key={product.id} product={product} />)
                }
            </div>
        </div>
    );
};

export default PopularProducts;