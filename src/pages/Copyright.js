import React from 'react';
import '../css/copyright.css';
import '../css/normalize.css';

const Copyright = () => {
    return (
        <div>
            <div className='footer'>
                <div className='footer-left'>
                    <p className='contact-us'>聯絡我們</p>
                    <p className='phone'>電話:01-1234567</p>
                    <p className='cellphone'>手機:0912123456</p>
                    <p className='line'>LINE:a123456</p>
                </div>
                <div className='footer-right'>
                    <p className='add-line-friend'>LINE加入好友</p>
                </div>
            </div>
            <div className='copyright'>
                <p className='copytright'>2023 © Boris Hu</p>
            </div>
        </div>
    );
};

export default Copyright;
