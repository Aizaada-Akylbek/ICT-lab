import React from 'react';
import { BackTop } from 'antd';

function AppFooter (){
    return (
        <div className='container-fluid'>
            <div className='footer'>
                <div className='logo'>
                    <i class='fas fa-desktop'></i>
                    <a href='#'>ICT Lab</a>

                </div>
                <ul className='socials'>
                    <li><a href='https://www.facebook.com'><i className='fab fa-facebook-f'></i></a></li>
                    <li><a href='https://www.whatsapp.com'><i className='fab fa-whatsapp'></i></a></li>
                    <li><a href='https://www.instagram.com'><i className='fab fa-instagram'></i></a></li>

                </ul>
                <div className='copyright'>Copyright &copy; 2022 ICT Lab</div>
                <BackTop>
                     <div className='goTop'><i className='fas fa-arrow-circle-up'></i>UP</div>
                </BackTop>

            </div>

        </div>
    )
}
export default AppFooter;