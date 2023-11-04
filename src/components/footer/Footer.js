import { useRef } from 'react';

//styles
//animation
import { AnimationOnScroll } from 'react-animation-on-scroll';
import styles from './footer.module.css';

//images
import appLink1 from '../../images/app-link.png';
import appLink2 from '../../images/app-link2.png';
import appLink3 from '../../images/app-link3.png';
import companyLink1 from '../../images/company-link1.png';
import companyLink2 from '../../images/company-link2.png';

//icons 
import { ArrowUp, ArrowUp2, Call, Facebook, Instagram, Message2, Whatsapp } from 'iconsax-react';

const Footer = () => {
    const inputRef = useRef();
    const click = () => {
        console.log(inputRef.current.value);
    }
    return (
        <footer className={`${styles.container}`}>
            <div className={styles.arrowUpContainer}>
                <button className={styles.arrowUpBtn}><ArrowUp2 /></button>
            </div>
            <div className='flex justify-space '>

            <AnimationOnScroll animateOnce={true} animateIn='animate__fadeIn' delay={0}>
                <ul>
                <AnimationOnScroll animateOnce={true} animateIn='animate__fadeInUp' delay={0} duration={0.5}>
                    <li><a className={`${styles.link} ${styles.active}`} href='#'>خانه</a></li>
                </AnimationOnScroll>

                <AnimationOnScroll animateOnce={true} animateIn='animate__fadeInUp' delay={100} duration={0.5}>
                    <li><a className={styles.link} href='#'>محصولات</a></li>
                </AnimationOnScroll>

                <AnimationOnScroll animateOnce={true} animateIn='animate__fadeInUp' delay={200} duration={0.5}>
                    <li><a className={styles.link} href='#'>وبلاگ</a></li>
                </AnimationOnScroll>

                <AnimationOnScroll animateOnce={true} animateIn='animate__fadeInUp' delay={300} duration={0.5}>
                    <li><a className={styles.link} href='#'>پروفایل</a></li>
                </AnimationOnScroll>

                </ul>
            </AnimationOnScroll>

            <AnimationOnScroll animateOnce={true} animateIn='animate__fadeIn' delay={100}>
                <div style={{ alignItems: 'unset' }} className='flex flex-column'>
                <AnimationOnScroll animateOnce={true} animateIn='animate__fadeInUp' delay={0} duration={0.5}>
                    <a href='#'>
                        <img src={appLink1} />
                    </a>
                </AnimationOnScroll>

                
                <AnimationOnScroll animateOnce={true} animateIn='animate__fadeInUp' delay={100} duration={0.5}>
                    <a href='#'>
                        <img src={appLink2} />
                    </a>
                </AnimationOnScroll>
                
                <AnimationOnScroll animateOnce={true} animateIn='animate__fadeInUp' delay={200} duration={0.5}>
                    <a href='#'>
                        <img src={appLink3} />
                    </a>
                </AnimationOnScroll>
                </div>
            </AnimationOnScroll>

            <AnimationOnScroll animateOnce={true} animateIn='animate__fadeIn' delay={200}>
            <div>
                <AnimationOnScroll animateOnce={true} animateIn='animate__fadeIn'>
                    <h4 className='mb-3'>مورد تایید</h4>
                </AnimationOnScroll>
                 <div style={{ alignItems: 'unset' }} className='flex gap-1'>
                 <AnimationOnScroll animateOnce={true} animateIn='animate__fadeInUp' delay={0} duration={0.5}>
                    <a href='#'>
                            <img src={companyLink1} />
                        </a>
                 </AnimationOnScroll>

                 <AnimationOnScroll animateOnce={true} animateIn='animate__fadeInUp' delay={100} duration={0.5}>
                        <a href='#'>
                            <img src={companyLink2} />
                        </a>
                </AnimationOnScroll>
                 </div>
            </div>
            </AnimationOnScroll>

            <AnimationOnScroll animateOnce={true} animateIn='animate__fadeIn' delay={300}>
                <div>
                <AnimationOnScroll animateOnce={true} animateIn='animate__fadeIn' delay={0} duration={0.5}>
                    <h4 className='mb-3'>با ثبت ایمیل از خبر های آرمان شاپ مطلع شوید</h4>
                </AnimationOnScroll>

                <AnimationOnScroll animateOnce={true} animateIn='animate__fadeIn' delay={100} duration={0.5}>
                    <h4 style={{ opacity: '0.6' }} className='mb-1'>ایمیل شما</h4>
                </AnimationOnScroll>
                    <form onSubmit={(e) => e.preventDefault()} className='flex gap-05'>
                    <AnimationOnScroll animateOnce={true} animateIn='animate__fadeInUp' delay={200} duration={0.5}>
                        <input ref={inputRef} placeholder='مثال : arman.uiux@gmail.com' type='text' className={styles.input} />
                    </AnimationOnScroll>

                    <AnimationOnScroll animateOnce={true} animateIn='animate__fadeInUp' delay={300} duration={0.5}>
                        <button onClick={click} style={{ color: 'var(--black)', background: 'var(--white)', fontWeight: 'bold' }} className='btn'>ثبت</button>
                    </AnimationOnScroll>
                    </form>
                </div>
            </AnimationOnScroll>

            </div>

        
                <div className={`flex justify-space ${styles.footerBottom}`}>
                <div className='flex gap-1'>
                        <a href='#'><Instagram  color="#d9e3f0" variant="Bulk" /></a>
                        <a href='#'><Whatsapp color="#d9e3f0" variant="Bulk"  /></a>
                        <a href='#'><Facebook color="#d9e3f0" variant="Bulk"  /></a>
                        
                    </div>
                    <div className='flex gap-2'>
                        <div className='flex gap-05'>
                            <p className={styles.info}>arman.uiux@gmail.com</p>
                            <Message2
                                color="#d9e3f0"
                                variant="Bulk"
                            />
                        </div>
                        <div className='flex gap-05'>
                            <p className={styles.info}>09016192302</p>
                            <Call
                                color="#d9e3f0"
                                variant="Bulk"
                            />
                        </div>
                    </div>
    
                </div>
        </footer>
    );
};

export default Footer;