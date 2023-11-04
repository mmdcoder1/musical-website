import React from 'react';

//styles
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import styles from './status.module.css';

//data 
import { statusData } from './data';


//images
import scroll from '../../images/scroll-icon.svg';

const Status = () => {
    return (
        <AnimationOnScroll  animateOnce={true} animateIn='animate__fadeInUp'>
                <div className={`${styles.container}`}>
                    <div className='flex flex-column gap-1 mb-1'>
                        <img src={scroll} alt='scroll' />
                        <p>اسکرول کنید</p>
                    </div>
                    
                    <div className={`${styles.statusContainer} flex p-2 justify-around`}>
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

                </div>
        </AnimationOnScroll>
    );
};

export default Status;