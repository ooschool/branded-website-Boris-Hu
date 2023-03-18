import React from 'react';
import '../css/payment.css';
import '../css/normalize.css';
import { Link } from 'react-router-dom';

const Payment = () => {
    return (
        <div>
            <div className='payment-process'>
                <div className='cart' style={{ backgroundColor: 'aqua' }}>
                    <p>購物車</p>
                </div>
                <div className='customer-data'>
                    <p>填寫資料</p>
                </div>
                <div className='order-data'>
                    <p>訂單確認</p>
                </div>
                <div className='line'></div>
            </div>

            <div className='order-content'>
                <div className='title'>
                    <p>訂購內容</p>
                </div>
                <div className='top-bar'>
                    <p className='product-name'>商品</p>
                    <div className='detail'>
                        <p>價格</p>
                        <p>數量</p>
                        <p>小計</p>
                    </div>
                </div>
                <hr />

                <div className='product-card'>
                    <div className='product-img'>
                        <img src='./src/powder.png' alt='' />
                        <p>商品名稱</p>
                    </div>
                    <div className='product-data'>
                        <p>$NT100</p>
                        <div className='amount'>
                            <p>-</p>
                            <p>2</p>
                            <p>+</p>
                        </div>
                        <p>$NT 200</p>
                    </div>
                </div>
                <div className='product-card'>
                    <div className='product-img'>
                        <img src='./src/powder.png' alt='' />
                        <p>商品名稱</p>
                    </div>
                    <div className='product-data'>
                        <p>$NT100</p>
                        <div className='amount'>
                            <p>-</p>
                            <p>2</p>
                            <p>+</p>
                        </div>
                        <p>$NT 200</p>
                    </div>
                </div>
                <div className='product-card'>
                    <div className='product-img'>
                        <img src='./src/powder.png' alt='' />
                        <p>商品名稱</p>
                    </div>
                    <div className='product-data'>
                        <p>$NT100</p>
                        <div className='amount'>
                            <p>-</p>
                            <p>2</p>
                            <p>+</p>
                        </div>
                        <p>$NT 200</p>
                    </div>
                </div>
            </div>

            <div className='selections'>
                <div className='deliver'>
                    <div className='title'>
                        <p>付款及運送</p>
                    </div>
                    <div className='drop-list'>
                        <label for='delever-location'> 送貨地點 </label>
                        <select name='delever-location' id=''>
                            <option value='delever-location'>台北</option>
                            <option value='delever-location'>台中</option>
                            <option value='delever-location'>台南</option>
                        </select>
                    </div>
                    <div className='drop-list'>
                        <label for='delever-location'> 送貨方式 </label>
                        <select name='delever-location' id=''>
                            <option value='delever-location'>自取</option>
                            <option value='delever-location'>郵寄</option>
                        </select>
                    </div>
                    <div className='drop-list'>
                        <label for='delever-location'> 付款方式 </label>
                        <select name='delever-location' id=''>
                            <option value='delever-location'>轉帳</option>
                            <option value='delever-location'>貨到付款</option>
                            <option value='delever-location'>信用卡</option>
                        </select>
                    </div>
                </div>

                <div className='order-detail'>
                    <div className='title'>
                        <p>訂單資訊</p>
                    </div>
                    <div className='total-price'>
                        <p>總價：</p>
                        <p>$NT 600</p>
                    </div>
                    <div className='total-price'>
                        <p>運費：</p>
                        <p>$NT 100</p>
                    </div>
                    <hr />
                    <div className='total-price'>
                        <p>合計：</p>
                        <p>$NT 700</p>
                    </div>

                    <Link className='outer-pay-total' to={'/data'}>
                        <button type='button' className='pay-total'>
                            結帳
                        </button>
                    </Link>
                </div>
            </div>
            <br />
            <hr />
        </div>
    );
};

export default Payment;
