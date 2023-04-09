import './Home.css'
import FeaturedCategories from '../FeaturedCategories/FeaturedCategories';
import Banner from '../Banner/Banner';
import { useContext } from 'react';
import { ProductsContext } from '../../App';
import PopularProducts from '../PopularProducts/PopularProducts';

const Home = () => {
    const products = useContext(ProductsContext);
    
    return (
        <>
            <Banner />
            <FeaturedCategories />
            <PopularProducts />
        </>
    );
};

export default Home;