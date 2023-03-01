import React from 'react';

//styles
import styles from './instument.module.css';


//images
import Instrument1 from '../../images/instrument1.svg';

//data
import { instrumentData } from './data';

const Instruments = () => {
    return (
        <div className={`flex gap-2 justify-center ${styles.container}`}>
            <div className={`flex p-1 justify-center gap-2 ${styles.col} ${styles.active}`}>
                <h4 className={styles.title}>ویولون</h4>
                <img className={styles.image} src={Instrument1} />
            </div>
            {
                instrumentData.map(instrument => <div className={`flex p-1 justify-center gap-2 ${styles.col}`}>
                                                    <h4 className={styles.title}>{instrument.title}</h4>
                                                    <img className={styles.image} src={instrument.image} />
                                                </div>)
            }
        </div>
    );
};

export default Instruments;