import React from 'react';

//styles
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import styles from './instument.module.css';


//images
import Instrument1 from '../../images/instrument1.svg';

//data
import { instrumentData } from './data';

const Instruments = () => {
    return (
        <div className={`section-margin flex gap-2 justify-center ${styles.container} section-margin`}>
            <div className={`flex p-1 justify-center gap-2 ${styles.col} ${styles.active}`}>
                <h4 className={styles.title}>ویولون</h4>
                <img className={styles.image} src={Instrument1} />
            </div>
            {
                instrumentData.map(instrument =>
                    <AnimationOnScroll key={instrument.id} className={`flex p-1 justify-center gap-2 ${styles.col}`} animateOnce={true} animateIn='animate__fadeInUp' delay={instrument.id * 100} duration={0.5}>
                            <h4 className={styles.title}>{instrument.title}</h4>
                            <img className={styles.image} src={instrument.image} />
                    </AnimationOnScroll>
                                                )
            }
        </div>
    );
};

export default Instruments;