import React, {useState, useEffect} from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavItem, NavMenu, NavLinks, NavBtn, NavBtnLink } from './Navbar';

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80){
            setScrollNav(true)}
                else{
                    setScrollNav(false)
                }
            };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };    
    
    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick ={toggleHome} >Tech</NavLogo>
                    <MobileIcon onClick={toggle}><FaBars /></MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contact us</NavLinks>
                        </NavItem>
                        
                    </NavMenu>
                    {/* <NavBtn>
                        <NavBtnLink to='contact' smooth={true} duration={500} spy={true} exact='true' offset={-80}> Enquire</NavBtnLink>
                    </NavBtn> */}
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar
