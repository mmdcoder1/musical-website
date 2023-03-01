import React from 'react';

//styles
import styles from './right-column.module.css';

//images
import image from '../../../images/main-right-image.svg';
import arrow from '../../../images/main-right-arrow.svg';

const RightColumn = () => {
    return (
        <div className={styles.container}>
            <img className='mb-1' src={image} alt='عکس' />
            <h2 className={styles.title}>با ما صدای لذتبخش و دلنشین <br />ساز های موسیقی را تجربه کنید</h2>
            <p className={`mb-3 ${styles.text}`}>انواع ساز های موسیقی با بهترین کیفیت و ضمانت یک ساله
                <br />
                در بزرگترین فروشگاه آلات موسیقی ( آرمان شاپ ) </p>
            <div className='flex gap-1 mt-3'>
               <a href='#' className='btn btn-only'>محصولات</a>
               <a href='#' className='btn btn-text'>همکاری با ما</a>
            </div>
            <img className={styles.arrow} src={arrow} />
        </div>
    );
};

export default RightColumn;