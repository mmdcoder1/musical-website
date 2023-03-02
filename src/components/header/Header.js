import { useState } from 'react';

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
        <div style={{ marginTop: '3rem' }} className='section-margin flex justify-space'>
            <img src={logo} />
                <nav>
                    <ul className='flex gap-4'>
                        <li><a className="link active" href='#'>خانه</a></li>
                        <li><a className="link" href='#'>محصولات</a></li>
                        <li className='flex gap-05'>
                            <a className="link" href='#'>دسته بندی</a> 
                            <ArrowDown2 style={{ color: 'var(--black)', opacity: '0.8' }} />
                        </li>
                        <li><a className="link" href='#'>وبلاگ</a></li>
                    </ul>
                </nav>
            <div className='flex gap-1'>
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