import { useState } from 'react';

//styles
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

//animation
import 'animate.css';

//images
import logo from '../../images/logo.svg';
import headerProfile from '../../images/header-profile.png';

//icons 
import { 
  ArrowDown2,
  Bag2
} from 'iconsax-react';

const Header = () => {
    // const [show, setShow] = useState(true);
    return (
        <div style={{ paddingTop: '3rem', overflow: 'hidden' }} className='section-margin flex justify-space'>
            <img className={`animate__animated animate__bounceInRight`} src={logo} />
                <nav>
                    <ul className='flex gap-4'>
                        <li style={{ animationDelay: '50ms' }} className='animate__animated animate__fadeInUp'><a className="link active" href='#'>خانه</a></li>
                        <li style={{ animationDelay: '100ms' }} className='animate__animated animate__fadeInUp'><a className="link" href='#'>محصولات</a></li>
                        <li style={{ animationDelay: '150ms' }} className='animate__animated animate__fadeInUp flex gap-05'>
                            <a className="link" href='#'>دسته بندی</a> 
                            <ArrowDown2 style={{ color: 'var(--black)', opacity: '0.8' }} />
                        </li>
                        <li style={{ animationDelay: '200ms' }} className='animate__animated animate__fadeInUp'><a className="link" href='#'>وبلاگ</a></li>
                    </ul>
                </nav>
            <div className='flex gap-1 animate__animated animate__bounceInLeft'>
               <img src={headerProfile} />
               <div className='flex gap-05'>
                  <a className='link' href='#'>آرمان</a>
                  <ArrowDown2 />
               </div>
               <Bag2 />
            </div>
        </div>
    )
};

export default Header;