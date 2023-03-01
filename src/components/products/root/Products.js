import React from 'react';

//styles
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
        <div className={`flex gap-1 ${styles.container}`}>
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
    );
};

export default Products;