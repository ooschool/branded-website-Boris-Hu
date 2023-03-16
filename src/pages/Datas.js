import React from 'react';
import Navbar from './Navbar';
import Copyright from './Copyright';
import '../css/payment.css';
import '../css/datas.css';
import '../css/normalize.css';

const Datas = () => {
    return (
        <div>
            <Navbar />

            <div class='payment-process'>
                <div class='cart'>
                    <p>購物車</p>
                </div>
                <div class='customer-data' style={{ backgroundColor: 'aqua' }}>
                    <p>填寫資料</p>
                </div>
                <div class='order-data'>
                    <p>訂單確認</p>
                </div>
                <div class='line'></div>
            </div>

            <div class='customer-datas'>
                <div class='title'>
                    <p>顧客資料</p>
                </div>
                <div class='fill-data'>
                    <label for='delever-location'> 顧客名字 </label>
                    <input type='text' />
                </div>
                <div class='fill-data'>
                    <label for='delever-location'> 電話號碼 </label>
                    <input type='text' />
                </div>
                <div class='fill-data'>
                    <label for='delever-location'> 電子信箱 </label>
                    <input type='text' />
                </div>
                <div class='fill-data'>
                    <label for='delever-location'> 訂單備註 </label>
                    <input type='text' />
                </div>
            </div>

            <div class='customer-datas'>
                <div class='title'>
                    <p>送貨資料</p>
                </div>
                <div class='fill-data'>
                    <label for='delever-location'> 收件人名字 </label>
                    <input type='text' />
                </div>
                <div class='fill-data'>
                    <label for='delever-location'> 收件人連絡電話 </label>
                    <input type='text' />
                </div>
                <div class='fill-data'>
                    <label for='delever-location'> 收件地址 </label>
                    <div class='selections'>
                        <select name='address' id='address'>
                            <option value='Taiwan'>台北</option>
                            <option value='Taiwan'>台中</option>
                            <option value='Taiwan'>台南</option>
                        </select>
                        <select name='dist' id='dist'>
                            <option value='district'>北區</option>
                            <option value='district'>中區</option>
                            <option value='district'>南區</option>
                        </select>
                    </div>
                    <input type='text' />
                </div>
            </div>
            <button class='data-sent'>送出訂單</button>
            <br />
            <hr />
            <Copyright />
        </div>
    );
};

export default Datas;
