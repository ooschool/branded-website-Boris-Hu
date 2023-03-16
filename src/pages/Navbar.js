import React from 'react';

import { Link } from 'react-router-dom';
import '../css/style.css';
// import './styles/style.scss'; donen't work

const Navbar = () => {
    return (
        <div>
            <div class='nav-bar'>
                <div class='logo'>
                    <Link to='/'>
                        <img src={require('../img/logo.png')} alt='' />
                    </Link>
                </div>
                <div class='pages'>
                    <Link to='/' class='main-page'>
                        {' '}
                        <p>首頁</p>{' '}
                    </Link>
                    <Link to='#' class='main-page'>
                        <p>所有商品</p>
                    </Link>
                    <Link to='#' class='main-page'>
                        <p>關於我們</p>
                    </Link>
                    <Link to='/payment' class='main-page'>
                        <p>購物車</p>
                    </Link>
                </div>
                <div class='icons'>
                    <i class='fa-solid fa-cart-shopping'>購物車</i>

                    <i class='fa-solid fa-heart'>收藏</i>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
