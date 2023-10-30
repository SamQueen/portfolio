import { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './nav.css';

function Nav() {
    const [scroll, setScroll] = useState(true);
    const [scroll2, setScroll2] = useState(true);
    const [navGrow, setNavGrow] = useState(false);
    
    useEffect(() => {
        document.addEventListener('scroll', () => {
            const scrollVal = window.scrollY < 100;
            
            if (scrollVal !== scroll) {
                setScroll(scrollVal);
            }
        });
    })

    // grow mobile nave when icon clicker
    const navGrowEvent = () => {
        setNavGrow(!navGrow);
        setScroll2(!scroll2);
    }

    // set classname based on scrollval
    var className = (scroll) ? '' : 'nav-active';
    var className3 = (scroll2) ? '' : 'nav-active';
    // set classname based on nav grow
    var className2 = (navGrow) ? 'nav-grow' : ''; 

    return(
        <div className={`nav-container ${className} ${className3}`}>
            
            <h2 id="logo">Sam Queen</h2>

            {/* <p>icons</p> */}

            <FaBars id="bars-icon" onClick={navGrowEvent}/>

            <div className={`mobile-nav ${className2}`}>
                <ul id="mobile-nav-list">
                    <li><a href="#title-section"> HOME </a></li>
                    <li><a href="#about-section"> ABOUT </a></li>
                    <li><a href="#project-section"> PROJECTS </a></li>
                    <li><a href="#resume-section"> RESUME </a></li>
                    <li><a href="#contact-section"> CONTACTS </a></li>
                </ul>
            </div>

            <ul id="nav-list">
                <li><a href="#title-section"> HOME </a></li>
                <li><a href="#about-section"> ABOUT </a></li>
                <li><a href="#project-section"> PROJECTS </a></li>
                <li><a href="#resume-section"> RESUME </a></li>
                <li><a href="#contact-section"> CONTACTS </a></li>
            </ul>

        </div>
    );
}

export default Nav;