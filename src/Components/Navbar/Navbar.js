import { useState } from 'react';
import './Navbar.scss';

import React from 'react'
import { ArrowDropDown, Notifications, Search } from '@mui/icons-material';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }
return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className='container'>
            <div className='left'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_logo.svg.png?20220504140802' alt='Logo' />
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>My List</span>
            
            </div>
            <div className='right'>
                <Search className='icon' />
                <span>KID</span>
                <Notifications className='icon' />
                <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' alt='Profile' />
                <div className='profile'>
                    <ArrowDropDown className='icon' />
                    <div className='Options'>
                        <span>Setting</span>
                        <span>Log Out</span>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
)
}

export default Navbar