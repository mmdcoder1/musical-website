import React from 'react';

//styles
import styles from './slide.module.css';

//images
import likeEmoji from '../../../images/like_emoji.svg';

const Slide = ({ slide }) => {
    return (
        <>
            <div>
                    <div className={`flex justify-space mb-1 ${styles.header}`}>
                    <div style={{ gap: '0.8rem' }} className='flex'>
                        <img className={styles.image} src={slide.image} />
                        <p className={styles.name}>{slide.name}</p>
                    </div>
                    <p className={styles.time}>{slide.time}</p>
                    </div>
                    <p className={styles.text}>{slide.text}</p>
            </div>
            <div className={`flex justify-end`} style={{ gap:'5px' }}>
               <div className={`flex ${styles.liked_container}`}>
                    <img src={likeEmoji} />
                    <div className={styles.liked_users_container}>
                        { slide.liked_users.map(user => <img className={styles[`${user.name}`]} key={user.id} src={user.image} />) }
                    </div>
               </div>  
            </div>
               
        </>
    );
};

export default Slide;