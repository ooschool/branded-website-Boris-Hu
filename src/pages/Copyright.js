import React from 'react';
import '../css/copyright.css';
import '../css/normalize.css';

const Copyright = () => {
    return (
        <div>
            <div class='footer'>
                <div class='footer-left'>
                    <p class='contact-us'>聯絡我們</p>
                    <p class='phone'>電話:01-1234567</p>
                    <p class='cellphone'>手機:0912123456</p>
                    <p class='line'>LINE:a123456</p>
                </div>
                <div class='footer-right'>
                    <p class='add-line-friend'>LINE加入好友</p>
                </div>
            </div>
            <div class='copyright'>
                <p class='copytright'>2023 © Boris Hu</p>
            </div>
        </div>
    );
};

export default Copyright;
