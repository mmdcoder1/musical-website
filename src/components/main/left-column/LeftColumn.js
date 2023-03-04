import React from 'react';

//styles 
import styles from './left-column.module.css';

//images
import image from '../../../images/main-left-image1.png';

const LeftColumn = () => {
    return (
        <div className={`${styles.container} animate__animated animate__fadeInLeft`}>
            <img src={image} />
        </div>
    );
};

export default LeftColumn;