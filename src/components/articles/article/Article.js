import React from 'react';

//styles
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import styles from './article.module.css';

//icons 
import { ArrowLeft } from 'iconsax-react';



const Article = ({ article }) => {
    return (
        <AnimationOnScroll className={`p-1 flex justify-space p-3 ${styles.container}`} animateOnce={true} animateIn='animate__fadeInUp' delay={article.id * 100} duration={0.5}>
            <img className={styles.image} src={article.image} />
            <div className={`${styles.details} flex flex-align-end justify-space`}>
                <div>
                    <h3 className={`mb-1 ${styles.title}`}>{article.title}</h3>
                    <p className={styles.text}>{article.text}</p>
                </div>
                <div className={`flex gap-05 ${styles.btnContainer}`}>
                   <a className={`${styles.btn}`}>مشخصات بیشتر</a>
                   <ArrowLeft />
                </div>
                
            </div>
        </AnimationOnScroll>
    );
};

export default Article;