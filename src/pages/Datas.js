import React from 'react';
import { Link } from 'react-router-dom';
import '../css/payment.css';
import '../css/datas.css';
import '../css/normalize.css';

const Datas = () => {
    return (
        <div>
            <div className='payment-process'>
                <div className='cart'>
                    <p>購物車</p>
                </div>
                <div className='customer-data' style={{ backgroundColor: 'aqua' }}>
                    <p>填寫資料</p>
                </div>
                <div className='order-data'>
                    <p>訂單確認</p>
                </div>
                <div className='line'></div>
            </div>

            <div className='customer-datas'>
                <div className='title'>
                    <p>顧客資料</p>
                </div>
                <div className='fill-data'>
                    <label for='delever-location'> 顧客名字 </label>
                    <input type='text' />
                </div>
                <div className='fill-data'>
                    <label for='delever-location'> 電話號碼 </label>
                    <input type='text' />
                </div>
                <div className='fill-data'>
                    <label for='delever-location'> 電子信箱 </label>
                    <input type='text' />
                </div>
                <div className='fill-data'>
                    <label for='delever-location'> 訂單備註 </label>
                    <input type='text' />
                </div>
            </div>

            <div className='customer-datas'>
                <div className='title'>
                    <p>送貨資料</p>
                </div>
                <div className='fill-data'>
                    <label for='delever-location'> 收件人名字 </label>
                    <input type='text' />
                </div>
                <div className='fill-data'>
                    <label for='delever-location'> 收件人連絡電話 </label>
                    <input type='text' />
                </div>
                <div className='fill-data'>
                    <label for='delever-location'> 收件地址 </label>
                    <div className='selections'>
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
            <Link className='outer-btn' to={'/order'}>
                <button className='data-sent'>
                    <p>送出訂單</p>
                </button>
            </Link>

            <br />
            <hr />
        </div>
    );
};

export default Datas;
