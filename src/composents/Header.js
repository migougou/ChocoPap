import React, { useState, useEffect } from 'react';
import logo from '../logo.png'
import '../CSS/Header.css'
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCart } from 'react-icons/im';
import { NavLink } from 'react-router-dom';


const Header = ({ displayPanier, setDisplayPanier, numberOfProducts }) => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [largeur, setLargeur] = useState(window.innerWidth)

    const toggleNavSmallScreen = () => {
        setToggleMenu(!toggleMenu);
    }

    useEffect(() => {

        const changeWidht = () => {
            setLargeur(window.innerWidth)

            if (window.innerWidth > 500) {
                setToggleMenu(false);
            }
        }

        window.addEventListener('resize', changeWidht);

        return () => {
            window.removeEventListener('resize', changeWidht)
        }

    }, [])

    return (
        <header>
            <img src={logo} alt='logo' className='logo mx-4 my-3' />
            {(toggleMenu || largeur > 500) && (
                <ul className='liste me-3 mb-0'>
                    <li className='items px-2 '><NavLink className='text-white' to='/'>Accueil</NavLink></li>
                    <li className='items px-2 '><NavLink className='text-white' to='/Boutique'>Boutique</NavLink></li>
                    <li className='items px-2 '><span className='text-white' onClick={() => { setDisplayPanier(!displayPanier) }}>{largeur < 576 ? 'Panier ' : ''}{numberOfProducts}<ImCart className='text-white' /></span></li>
                </ul>
            )}

            <span onClick={toggleNavSmallScreen} className='btnn'><GiHamburgerMenu size='70' /></span>


        </header>
    );
};


export default Header;