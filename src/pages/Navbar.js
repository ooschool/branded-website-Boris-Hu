import { React, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';
// import './styles/style.scss'; donen't work

const Navbar = () => {
    const allProduct = useRef(null);
    const scrollToAll = () => {
        allProduct.current?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div>
            <div className='nav-bar'>
                <div className='logo'>
                    <Link to='/'>
                        <img src={require('../img/logo.png')} alt='' />
                    </Link>
                </div>
                <div className='pages'>
                    <Link to='/' className='main-page'>
                        {' '}
                        <p>首頁</p>{' '}
                    </Link>
                    <Link onClick={scrollToAll} className='main-page'>
                        <p>所有商品</p>
                    </Link>
                    <Link to='#all-product' className='main-page'>
                        <p>關於我們</p>
                    </Link>
                    <Link to='/payment' className='main-page'>
                        <p>購物車</p>
                    </Link>
                </div>
                <div className='icons'>
                    <i className='fa-solid fa-cart-shopping'>購物車</i>

                    <i className='fa-solid fa-heart'>收藏</i>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
