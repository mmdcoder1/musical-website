import React from 'react';

//styles
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import styles from './products.module.css';

//components
import { productsData } from '../data';
import Product from '../product/Product';

//image
import shadow from '../../../images/products-shadow.svg';

//icons 
import { ArrowCircleRight } from 'iconsax-react';

const Products = () => {
    return (
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
        <div className={`section-margin flex gap-1 ${styles.container}`}>
            <div className='flex gap-1'>
                <ArrowCircleRight
                    color='#999'
                    size={40}
                />
    <div className={styles.products}>
        <div className={`${styles.productsInside}`}>
            {
                productsData.map(product => {
                    return <Product key={product.id} product={product} />
                })
            }
        </div>
    </div>
            </div>
            <img className={styles.shadow} src={shadow} />
        </div>
        </AnimationOnScroll>
    );
};

export default Products;