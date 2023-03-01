import React from 'react';

//styles
import styles from './product.module.css';

//icons 
import { Star1, ArrowLeft } from 'iconsax-react';

const Product = ({ product }) => {
    return (
        <div className={styles.container}>
           <div className={`flex justify-center ${styles.imageContainer}`}>
              <img className={styles.image} src={product.image} />
           </div>
           <div className='mt-1'>
              <h4>{product.title}</h4>
              <div style={{ marginTop: "1.4rem" }} className='flex justify-space'>
                    <p className={styles.text}>{product.text}</p>
                    <div className='flex gap-05'>
                        <span className={styles.starText}>{product.stars}</span>
                        <Star1
                                color="#f0b621"
                                variant="Bold"
                        />
                    </div>
              </div>
              <div style={{ marginTop: "1.4rem" }} className='flex justify-space'>
                    <a className={`btn flex gap-05 ${styles.btn}`}>
                        <span>مشخصات بیشتر</span>
                        <ArrowLeft
                            color="#ffffff"
                        />
                    </a>
                    <p style={{ gap: "3px" }} className='flex'><h4>{product.price}</h4> تومان</p>
              </div>
           </div>
        </div>
    );
};

export default Product;