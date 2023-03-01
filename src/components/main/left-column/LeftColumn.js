import React from 'react';

//styles 
import styles from './left-column.module.css';

//images
import image from '../../../images/main-left-image.png';

const LeftColumn = () => {
    return (
        <div className={styles.container}>
            <img src={image} />
        </div>
    );
};

export default LeftColumn;