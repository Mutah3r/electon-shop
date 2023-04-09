import React, { useContext } from 'react';
import { ProductsContext } from '../../App';
import './PopularProducts.css'
import Card from '../Card/Card';
import {filterPopularProducts} from '../../utils/filterPopularProducts';

const PopularProducts = () => {
    const products = useContext(ProductsContext);
    const popularProducts = filterPopularProducts(products, 8);

    return (
        <div className='popular-products-wrapper'>
            <h2>Popular products</h2>
            <div className="popular-products">
                {
                    popularProducts.map(product => <Card key={product.id} product={product} />)
                }
                
            </div>
        </div>
    );
};

export default PopularProducts;