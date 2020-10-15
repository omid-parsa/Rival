import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/ryval.svg';
import sprite from '../../assets/sprite.svg';
import {ReactComponent as CartSvg } from '../../assets/shopping-bag.svg';
import {ReactComponent as UserSvg } from '../../assets/user.svg';

import UseComponentVisible from '../../utils/use-component-visible';

import './navbar.styles.scss';

const NavBar = ({navLinks, logo}) => {
    const [navOpen, setNavOpen] = useState(false);
    const[windowWidth, setWindowWidth] = useState(window.innerWidth);
    const[checkFinal, setCheckFinal] = useState(false);
    const[prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const[navVisible, setNavVisible] = useState(true);
    

    const {
        ref,
        isComponentVisible,
        setIsComponentVisible
    } = UseComponentVisible(true);

    

    const handleNavOpen = () => {
        !isComponentVisible ? setNavOpen(false): setNavOpen(navOpen);
    }

    const handleResize = e => {
        setWindowWidth(window.innerWidth);
    };
    const checkSizeBtnClicked = () => {
        if (navOpen && windowWidth<1100) {
            // console.log('yes');
            setCheckFinal(true);
        }else{
            setCheckFinal(false);
        }
    };
    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setNavVisible(prevScrollPos > currentScrollPos);

        setPrevScrollPos(currentScrollPos);
    };
    useEffect( () => {
        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);
        checkSizeBtnClicked();
        handleNavOpen();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    });
    return (
        <nav ref={ref} className={navVisible ? 'navbar': 'invisible navbar'}>
            <figure className='logo-container'>
                <Logo className='logo' />
            </figure>
            <ul className={checkFinal && isComponentVisible ? 'active navbar__menu': 'navbar__menu'}>
                {
                    navLinks.map(link => 
                        <li className='navbar__item'>
                            <Link to={link.path} className='navbar__link'>
                                {link.text}
                            </Link>
                        </li>
                    )
                }
            
                <form className='navbar__form'>
                    <input type='search' placeholder='Search' className='navbar__search-field'/>
                    <button className='navbar__search-btn'>
                        <svg className='navbar__search-icon'>
                            <use xlinkHref={sprite + "#icon-magnifying-glass"} />
                        </svg>
                    </button>
                </form>
            </ul>
            <CartSvg className='cart'/>
            <UserSvg className='user'/>
            <div className='navbar__toggle' onClick={() => {setNavOpen(!navOpen);
            setIsComponentVisible(true);}} >
                <button className='navbar__toggle-btn'/>
            </div>
        </nav>


    );
}
export default NavBar;