import React from 'react';

//styles
import styles from './main.module.css';

//images
import image from '../../../images/main-right-image.svg';

//components
import RightColumn from '../right-column/RightColumn';
import LeftColumn from '../left-column/LeftColumn';


const Main = () => {
    return (
        <main className={`section-margin flex flex-align-start justify-space ${styles.container}`}>
            <RightColumn />
            <LeftColumn />
        </main>
    );
};

export default Main;