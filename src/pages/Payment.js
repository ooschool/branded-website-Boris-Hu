import React from 'react';
import Navbar from './Navbar';
import Copyright from './Copyright';
import '../css/payment.css';
import '../css/normalize.css';

const Payment = () => {
    return (
        <div>
            <Navbar />

            <div class='payment-process'>
                <div class='cart' style={{ backgroundColor: 'aqua' }}>
                    <p>購物車</p>
                </div>
                <div class='customer-data'>
                    <p>填寫資料</p>
                </div>
                <div class='order-data'>
                    <p>訂單確認</p>
                </div>
                <div class='line'></div>
            </div>

            <div class='order-content'>
                <div class='title'>
                    <p>訂購內容</p>
                </div>
                <div class='top-bar'>
                    <p class='product-name'>商品</p>
                    <div class='detail'>
                        <p>價格</p>
                        <p>數量</p>
                        <p>小計</p>
                    </div>
                </div>
                <hr />

                <div class='product-card'>
                    <div class='product-img'>
                        <img src='./src/powder.png' alt='' />
                        <p>商品名稱</p>
                    </div>
                    <div class='product-data'>
                        <p>$NT100</p>
                        <div class='amount'>
                            <p>-</p>
                            <p>2</p>
                            <p>+</p>
                        </div>
                        <p>$NT 200</p>
                    </div>
                </div>
                <div class='product-card'>
                    <div class='product-img'>
                        <img src='./src/powder.png' alt='' />
                        <p>商品名稱</p>
                    </div>
                    <div class='product-data'>
                        <p>$NT100</p>
                        <div class='amount'>
                            <p>-</p>
                            <p>2</p>
                            <p>+</p>
                        </div>
                        <p>$NT 200</p>
                    </div>
                </div>
                <div class='product-card'>
                    <div class='product-img'>
                        <img src='./src/powder.png' alt='' />
                        <p>商品名稱</p>
                    </div>
                    <div class='product-data'>
                        <p>$NT100</p>
                        <div class='amount'>
                            <p>-</p>
                            <p>2</p>
                            <p>+</p>
                        </div>
                        <p>$NT 200</p>
                    </div>
                </div>
            </div>

            <div class='selections'>
                <div class='deliver'>
                    <div class='title'>
                        <p>付款及運送</p>
                    </div>
                    <div class='drop-list'>
                        <label for='delever-location'> 送貨地點 </label>
                        <select name='delever-location' id=''>
                            <option value='delever-location'>台北</option>
                            <option value='delever-location'>台中</option>
                            <option value='delever-location'>台南</option>
                        </select>
                    </div>
                    <div class='drop-list'>
                        <label for='delever-location'> 送貨方式 </label>
                        <select name='delever-location' id=''>
                            <option value='delever-location'>自取</option>
                            <option value='delever-location'>郵寄</option>
                        </select>
                    </div>
                    <div class='drop-list'>
                        <label for='delever-location'> 付款方式 </label>
                        <select name='delever-location' id=''>
                            <option value='delever-location'>轉帳</option>
                            <option value='delever-location'>貨到付款</option>
                            <option value='delever-location'>信用卡</option>
                        </select>
                    </div>
                </div>

                <div class='order-detail'>
                    <div class='title'>
                        <p>訂單資訊</p>
                    </div>
                    <div class='total-price'>
                        <p>總價：</p>
                        <p>$NT 600</p>
                    </div>
                    <div class='total-price'>
                        <p>運費：</p>
                        <p>$NT 100</p>
                    </div>
                    <hr />
                    <div class='total-price'>
                        <p>合計：</p>
                        <p>$NT 700</p>
                    </div>
                    <button class='pay-total'>結帳</button>
                </div>
            </div>
            <br />
            <hr />
            <Copyright />
        </div>
    );
};

export default Payment;
