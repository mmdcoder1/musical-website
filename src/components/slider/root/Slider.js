import { useState, useEffect } from 'react';

//styles
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import styles from './slider.module.css';

//images
import musicNote from '../../../images/music-note.svg';
import noteGroup from '../../../images/note-group.svg';
import { slidesData } from '../data';
import sliderBG from '../../../images/slider_bg.png';

//components
import Slide from '../slide/Slide';

const Slider = () => {
    const [animationState, setAnimationState] = useState('running');
    return (
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
            <div className={styles.container}>
                <div className={`section-margin flex gap-05 ${styles.titleContainer}`}>
                    <img className={styles.noteGroup} src={noteGroup} />
                    <h2>نظرات مشتریان </h2>
                    <img src={musicNote} />
                </div>
                <img className={styles.bg} src={sliderBG} />
                <div className={styles.slider}>
                    { slidesData.map(slide => 
                        <div key={slide.id} style={{ alignItems: 'unset', animationPlayState: animationState }} className={`flex flex-column justify-space ${styles.slide}`}>
                            <Slide className={styles.slide} key={slide.id} slide={slide} />
                        </div>) 
                    }
                </div>
            </div>
        </AnimationOnScroll>
    );
};

export default Slider;