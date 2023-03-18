import React from 'react';
import '../css/landing.css';
import '../css/normalize.css';

const Landing = () => {
    return (
        <div>
            <div className='customer-cart'>
                <p className='shopping-cart'>購物車</p>
                <div className='shopping-cart-content'>
                    <img src={require('../img/powder.png')} alt='' />
                    <div className='product-desc'>
                        <p className='cart-product-price'>NT$ 100</p>
                        <div className='delete-icon'>刪除</div>
                        <div className='cart-calculate'>
                            <p className='cart-product-amount'>數量：</p>
                            <p className='decrease'>-</p>
                            <p className='cart-amount'>2</p>
                            <p className='increase'>+</p>
                        </div>
                    </div>
                </div>
                <div className='total-payment'>
                    <p>總金額：600</p>
                    <p className='total-price'></p>
                    <hr />
                </div>
                <button className='cart-pay'>結帳</button>
            </div>

            {/* 設定圖片Slider  */}

            <div className='slider'>
                <img src={require('../img/bg.png')} alt='' />
            </div>

            {/* 介紹商品  */}
            <div id='all-product-show' className='all-product'>
                所有商品
                <hr />
            </div>

            {/* 搜尋商品  */}
            <div className='search-bar'>
                <input type='text' placeholder='搜尋' className='search' />

                <select name='sort-price' id='sort'>
                    <option value='low'>價格低→高</option>
                    <option value='low'>價格高→低</option>
                </select>

                <i className='fa-solid fa-grip-lines'></i>
            </div>

            {/* 商品卡片(直式)  */}
            <div className='product-content'>
                {/* 單一商品圖卡  */}
                <div className='product-item'>
                    <div className='product-image'>
                        <img src={require('../img/powder.png')} alt='' />
                    </div>
                    <div className='product-name'>
                        <p className='product-name'>產品名稱</p>
                    </div>
                    <div className='content'>
                        <div className='product-describe'>
                            <p className='product-price'>$NT 100</p>
                            <p className='product-discount'>$NT 120</p>
                        </div>

                        <div className='btn'>
                            <button className='add-cart'>加入購物車</button>
                            <button className='product-buy'>直接購買</button>
                        </div>
                    </div>
                </div>
                <div className='product-item'>
                    <div className='product-image'>
                        <img src={require('../img/powder.png')} alt='' />
                    </div>
                    <div className='product-name'>
                        <p className='product-name'>產品名稱</p>
                    </div>
                    <div className='content'>
                        <div className='product-describe'>
                            <p className='product-price'>$NT 100</p>
                            <p className='product-discount'>$NT 120</p>
                        </div>

                        <div className='btn'>
                            <button className='add-cart'>加入購物車</button>
                            <button className='product-buy'>直接購買</button>
                        </div>
                    </div>
                </div>
                <div className='product-item'>
                    <div className='product-image'>
                        <img src={require('../img/powder.png')} alt='' />
                    </div>
                    <div className='product-name'>
                        <p className='product-name'>產品名稱</p>
                    </div>
                    <div className='content'>
                        <div className='product-describe'>
                            <p className='product-price'>$NT 100</p>
                            <p className='product-discount'>$NT 120</p>
                        </div>

                        <div className='btn'>
                            <button className='add-cart'>加入購物車</button>
                            <button className='product-buy'>直接購買</button>
                        </div>
                    </div>
                </div>
            </div>

            {/*  商品lightbox */}

            <div className='product-light-box'>
                <img src={require('../img/powder.png')} alt='' />
                <div className='product-lightbox-description'>
                    <div className='product-describtion'>
                        <p className='product-price-lightbox'>Price:$NT100</p>
                        <p className='product-intro-lightbox'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, fuga eveniet? Explicabo
                            voluptatum perferendis ea eos. Similique sit deleniti eum.
                        </p>
                        <p className='product-share-lightbox'>分享到：</p>
                    </div>
                    <div className='buy-product'>
                        <div className='product-amount'>
                            <p>數量:</p>
                            <p className='product-decrease'>-</p>
                            <p className='amount'>2</p>
                            <p className='product-increase'>+</p>
                        </div>
                        <div className='product-buy-btn'>
                            <button className='btn'>Add Cart</button>
                            <button className='btn'>Buy</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* 關於我們介紹  */}

            <div className='about-us'>
                <p className='about-title'>關於我們</p>
                <hr />
                <p className='about-content'>
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
        </div>
    );
};

export default Landing;
