import React from 'react';
import '../css/order.css';

const Order = () => {
    return (
        <div>
            {/* <!-- 付款流程 --> */}

            <div className='payment-process'>
                <div className='cart'>
                    <p>購物車</p>
                </div>
                <div className='customer-data'>
                    <p>填寫資料</p>
                </div>
                <div className='order-data' style={{ backgroundColor: 'aqua' }}>
                    <p>訂單確認</p>
                </div>
                <div className='line'></div>
            </div>

            {/* <!-- 訂單內容確認 --> */}

            <div className='order-list'>
                <div className='title'>
                    <p>訂單內容</p>
                </div>
                <p>訂單內容：</p>
                <p>產品1</p>
                <p>產品2</p>
                <div className='hr-line'></div>
                <div className='confirm-list'>
                    <p>顧客名字：</p>
                    <p>電話號碼：</p>
                    <p>電子信箱：</p>
                    <p>訂單備註：</p>
                    <p>收件人：</p>
                    <p>收件人電話：</p>
                    <p>收件地址：</p>
                </div>

                <p className='thanks'>謝謝您的訂購！</p>
            </div>

            <div className='hr-line'></div>
        </div>
    );
};

export default Order;
