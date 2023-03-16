import React from 'react';
import '../css/landing.css';
import '../css/normalize.css';
import Navbar from './Navbar';
import Copyright from './Copyright';

const Landing = () => {
    return (
        <div>
            <Navbar />

            <div class='customer-cart'>
                <p class='shopping-cart'>購物車</p>
                <div class='shopping-cart-content'>
                    <img src={require('../img/powder.png')} alt='' />
                    <div class='product-desc'>
                        <p class='cart-product-price'>NT$ 100</p>
                        <div class='delete-icon'>刪除</div>
                        <div class='cart-calculate'>
                            <p class='cart-product-amount'>數量：</p>
                            <p class='decrease'>-</p>
                            <p class='cart-amount'>2</p>
                            <p class='increase'>+</p>
                        </div>
                    </div>
                </div>
                <div class='total-payment'>
                    <p>總金額：600</p>
                    <p class='total-price'></p>
                    <hr />
                </div>
                <button class='cart-pay'>結帳</button>
            </div>

            {/* 設定圖片Slider  */}

            <div class='slider'>
                <img src={require('../img/bg.png')} alt='' />
            </div>

            {/* 介紹商品  */}
            <div class='all-product'>
                所有商品
                <hr />
            </div>

            {/* 搜尋商品  */}
            <div class='search-bar'>
                <input type='text' placeholder='搜尋' class='search' />

                <select name='sort-price' id='sort'>
                    <option value='low'>價格低→高</option>
                    <option value='low'>價格高→低</option>
                </select>

                <i class='fa-solid fa-grip-lines'></i>
            </div>

            {/* 商品卡片(直式)  */}
            <div class='product-content'>
                {/* 單一商品圖卡  */}
                <div class='product-item'>
                    <div class='product-image'>
                        <img src={require('../img/powder.png')} alt='' />
                    </div>
                    <div class='product-name'>
                        <p class='product-name'>產品名稱</p>
                    </div>
                    <div class='content'>
                        <div class='product-describe'>
                            <p class='product-price'>$NT 100</p>
                            <p class='product-discount'>$NT 120</p>
                        </div>

                        <div class='btn'>
                            <button class='add-cart'>加入購物車</button>
                            <button class='product-buy'>直接購買</button>
                        </div>
                    </div>
                </div>
                <div class='product-item'>
                    <div class='product-image'>
                        <img src={require('../img/powder.png')} alt='' />
                    </div>
                    <div class='product-name'>
                        <p class='product-name'>產品名稱</p>
                    </div>
                    <div class='content'>
                        <div class='product-describe'>
                            <p class='product-price'>$NT 100</p>
                            <p class='product-discount'>$NT 120</p>
                        </div>

                        <div class='btn'>
                            <button class='add-cart'>加入購物車</button>
                            <button class='product-buy'>直接購買</button>
                        </div>
                    </div>
                </div>
                <div class='product-item'>
                    <div class='product-image'>
                        <img src={require('../img/powder.png')} alt='' />
                    </div>
                    <div class='product-name'>
                        <p class='product-name'>產品名稱</p>
                    </div>
                    <div class='content'>
                        <div class='product-describe'>
                            <p class='product-price'>$NT 100</p>
                            <p class='product-discount'>$NT 120</p>
                        </div>

                        <div class='btn'>
                            <button class='add-cart'>加入購物車</button>
                            <button class='product-buy'>直接購買</button>
                        </div>
                    </div>
                </div>
            </div>

            {/*  商品lightbox */}

            <div class='product-light-box'>
                <img src={require('../img/powder.png')} alt='' />
                <div class='product-lightbox-description'>
                    <div class='product-describtion'>
                        <p class='product-price-lightbox'>Price:$NT100</p>
                        <p class='product-intro-lightbox'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, fuga eveniet? Explicabo
                            voluptatum perferendis ea eos. Similique sit deleniti eum.
                        </p>
                        <p class='product-share-lightbox'>分享到：</p>
                    </div>
                    <div class='buy-product'>
                        <div class='product-amount'>
                            <p>數量:</p>
                            <p class='product-decrease'>-</p>
                            <p class='amount'>2</p>
                            <p class='product-increase'>+</p>
                        </div>
                        <div class='product-buy-btn'>
                            <button class='btn'>Add Cart</button>
                            <button class='btn'>Buy</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* 關於我們介紹  */}

            <div class='about-us'>
                <p class='about-title'>關於我們</p>
                <hr />
                <p class='about-content'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores alias, adipisci provident
                    placeat quos exercitationem tempora optio distinctio ea minima cumque nulla veritatis ratione rerum
                    quod natus nisi nemo praesentium, quam a corrupti qui! Dolorem nulla reprehenderit perferendis
                    praesentium id, aliquam possimus suscipit quasi harum voluptate eos ratione odit doloremque.
                    Eveniet, est quas sint impedit omnis in rerum vel id facere tenetur harum ducimus tempora voluptate
                    delectus dolor, nisi expedita eos quam architecto fugiat adipisci? Voluptatibus dicta molestiae
                    laborum commodi, quod qui expedita sed. Laborum voluptate consequuntur labore nesciunt molestias
                    laudantium cum voluptatibus obcaecati nemo impedit aliquam quaerat asperiores repudiandae veritatis
                    earum, deleniti, ab, suscipit ea enim ad sunt. Eveniet nostrum deleniti assumenda vel
                    exercitationem, odit, ex suscipit similique repellat, debitis cumque quisquam commodi. Pariatur
                    suscipit eligendi alias dicta! Ratione officia iure ab, beatae eos, rerum sequi adipisci quis
                    exercitationem labore blanditiis quisquam ullam eum aperiam nihil ea suscipit excepturi optio
                    aliquam reprehenderit provident! Dolorem optio deleniti possimus aut consequatur ducimus quas, quia
                    voluptas similique voluptatibus aspernatur necessitatibus asperiores magnam iusto voluptate alias
                    doloribus inventore, aliquam accusamus maxime saepe, excepturi repudiandae enim dolore. Ipsum iste
                    cum quo deleniti itaque sed incidunt ullam delectus quidem, est, perspiciatis voluptates ipsa nemo
                    quaerat vel laudantium esse eligendi accusantium illum? Ab aperiam iste, enim nam hic itaque eius
                    voluptates delectus iure tempora, magni repellat sint at velit nihil voluptas porro fugiat, dolor
                    quos cupiditate natus perferendis quasi quibusdam! Quam numquam veniam impedit, doloribus nam
                    adipisci debitis nobis delectus incidunt deserunt? Necessitatibus nulla deserunt quis?
                </p>
            </div>

            <hr />
            <Copyright />
        </div>
    );
};

export default Landing;
