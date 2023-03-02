import React from 'react';

//styles
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
    return (
        <footer className={`${styles.container}`}>
            <div className={styles.arrowUpContainer}>
                <button className={styles.arrowUpBtn}><ArrowUp2 /></button>
            </div>
            <div className='flex justify-space '>
            <ul>
                <li><a className={`${styles.link} ${styles.active}`} href='#'>خانه</a></li>
                <li><a className={styles.link} href='#'>محصولات</a></li>
                <li><a className={styles.link} href='#'>وبلاگ</a></li>
                <li><a className={styles.link} href='#'>پروفایل</a></li>
            </ul>
            <div style={{ alignItems: 'unset' }} className='flex flex-column'>
                <a href='#'>
                    <img src={appLink1} />
                </a>
                <a href='#'>
                    <img src={appLink2} />
                </a>
                <a href='#'>
                    <img src={appLink3} />
                </a>
            </div>

            <div>
                <h4 className='mb-3'>مورد تایید</h4>
                 <div style={{ alignItems: 'unset' }} className='flex gap-1'>
                    <a href='#'>
                            <img src={companyLink1} />
                        </a>
                        <a href='#'>
                            <img src={companyLink2} />
                        </a>
                 </div>
            </div>

            <div>
                <h4 className='mb-3'>با ثبت ایمیل از خبر های آرمان شاپ مطلع شوید</h4>
                <h4 style={{ opacity: '0.6' }} className='mb-1'>ایمیل شما</h4>
                <form className='flex gap-05'> 
                    <input placeholder='مثال : arman.uiux@gmail.com' type='text' className={styles.input} />
                    <button style={{ color: 'var(--black)', background: 'var(--white)', fontWeight: 'bold' }} className='btn'>ثبت</button>
                </form>
            </div>

            </div>

            <div className={`flex justify-space ${styles.footerBottom}`}>
               <div className='flex gap-1'>
                    <a href='#'><Instagram  color="#d9e3f0" variant="Bulk" /></a>
                    <a href='#'><Whatsapp color="#d9e3f0" variant="Bulk"  /></a>
                    <a href='#'><Facebook color="#d9e3f0" variant="Bulk"  /></a>
                    
                </div>
                <div className='flex gap-2'>
                    <div className='flex gap-05'>
                        <p>arman.uiux@gmail.com</p>
                        <Message2
                            color="#d9e3f0"
                            variant="Bulk"
                        />
                    </div>
                    <div className='flex gap-05'>
                        <p>09016192302</p>
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