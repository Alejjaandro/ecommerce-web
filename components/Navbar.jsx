'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';

// Icons
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import AssessmentIcon from '@mui/icons-material/Assessment';

// Styles
import './styles/Navbar.css';

export default function Navbar() {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    // We create a variable to control if the sub-menu appears or not.
    const [menuVisible, setMenuVisible] = useState(false);

    return (
        <div className='nav-container'>

            {/* LEFT - LOGO */}
            <div className='left-container'>
                LOGO
            </div>

            {/* CENTER - LINKS */}
            <div className="center-container">
                <ul>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/products'>Products</Link></li>
                    <li><Link href='/about-us'>About Us</Link></li>
                    <li><Link href='/contact'>Contact</Link></li>
                </ul>
            </div>

            {/* RIGHT - LOGIN/REGISTER/USER LOGO */}
            <div className='right-container'>
                <span>John Doe</span>
                <button className='userIcon' onClick={() => setMenuVisible(!menuVisible)}>
                    <AccountBoxIcon />
                </button>
            </div>

            {/* PROFILE SUB MENU */}
            {menuVisible && (
                <div className="sub-menu-wrap">
                    <div className="sub-menu">

                        <div className="user-info">
                            <h2>John Doe</h2>
                            <hr />
                        </div>

                        <span><AccountBoxIcon /> My Profile</span>
                        <span><SettingsIcon /> Settings</span>
                        <span><ShoppingCartIcon /> Shopping Cart</span>
                        <span><AssessmentIcon /> My Orders</span>

                        <button><LogoutIcon /> Logout</button>

                    </div>
                </div>
            )}
        </div >
    )
}