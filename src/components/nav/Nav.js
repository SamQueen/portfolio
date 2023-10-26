import { useEffect, useState } from 'react';
import './nav.css';

function Nav() {
    const [scroll, setScroll] = useState(true);
    
    useEffect(() => {
        document.addEventListener('scroll', () => {
            const scrollVal = window.scrollY < 100;
            
            if (scrollVal !== scroll) {
                setScroll(scrollVal);
            }
        });
    })

    // set classname based on scrollval
    var className = (scroll) ? '' : 'nav-active'
    
    return(
        <div className={`nav-container ${className}`}>
            
            <h2 id="logo">Sam Queen</h2>

            <ul id="nav-list">
                <li><a href="#title-section"> HOME </a></li>
                <li><a href="#about-section"> ABOUT </a></li>
                <li><a href="#project-section"> PROJECTS </a></li>
                <li><a href="#"> RESUME </a></li>
                <li><a href="#"> CONTACTS </a></li>
            </ul>

        </div>
    );
}

export default Nav;