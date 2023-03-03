import React from 'react';

//styles
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import styles from './status.module.css';

//data 
import { statusData } from './data';

const Status = () => {
    return (
        <AnimationOnScroll  animateOnce={true} animateIn='animate__fadeInUp'>
        <div className={`section-margin flex p-1 justify-around ${styles.container}`}>
            
           {
                statusData.map(item =>
                        <div key={item.id} className='text-center'>
                            <div className='mb-05 flex'>
                                <h3>{item.title}</h3>
                                <img src={item.image} />
                            </div>
                            <p className={styles.text}>{item.text}</p>
                        </div>
                )
           }

        </div>
        </AnimationOnScroll>
    );
};

export default Status;