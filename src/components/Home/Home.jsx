import './Home.css'
import FeaturedCategories from '../FeaturedCategories/FeaturedCategories';
import Banner from '../Banner/Banner';
import { useContext } from 'react';
import { ProductsContext } from '../../App';

const Home = () => {
    const products = useContext(ProductsContext);
    
    return (
        <>
            <Banner />
            <FeaturedCategories />
        </>
    );
};

export default Home;