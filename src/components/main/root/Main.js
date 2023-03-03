import { useEffect, useState } from 'react';

//styles
import styles from './main.module.css';

//images
import image from '../../../images/main-right-image.svg';

//components
import RightColumn from '../right-column/RightColumn';
import LeftColumn from '../left-column/LeftColumn';


//animation
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const component =  <main style={{ overflow: 'hidden' }} className={`section-margin flex flex-align-start justify-space ${styles.container}`}>
                        <RightColumn />
                        <LeftColumn />
                   </main>

const Main = () => {
    const [scrollAnimate, setScrollAnimate] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            if(window.scrollY > 800) setScrollAnimate(true);
        })
    })
    return (
        <>

          {
            (scrollAnimate) ?
            <AnimationOnScroll animateIn="animate__fadeInDown">
                 {component}
            </AnimationOnScroll> : component
          } 
       </>
    );
};

export default Main;