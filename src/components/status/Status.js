import React from 'react';

//styles
import styles from './status.module.css';

//data 
import { statusData } from './data';

const Status = () => {
    return (
        <div className={`flex p-1 justify-around ${styles.container}`}>
            
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
    );
};

export default Status;