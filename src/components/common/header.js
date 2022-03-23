import React from 'react';
import {  Menu } from 'antd';
import { Anchor } from 'antd';

const { Link } = Anchor;


function AppHeader() {
    return(
        <div className='container-fluid'>
            <div className='header'>
            <div className="logo">
                <i class ='fas fa-desktop'></i>
                {/* <i class ='fas fa-bolt' ></i> */}
                <a href='http:www.google.com'>ICT Lab</a>
            </div>
                {/* <Menu defaultSelectedKeys={['main-header']}>
                    <Menu.Item key='main-header'>ГЛАВНАЯ</Menu.Item>
                    <Menu.Item  key='about-us'>О НАС</Menu.Item>
                    <Menu.Item key='our-services'>НАШИ УСЛУГИ</Menu.Item>
                    <Menu.Item key='projects'>ПРОЕКТЫ</Menu.Item>
                    <Menu.Item key='contacts'>КОНТАКТЫ</Menu.Item>

                </Menu> */}
                <Anchor targetOffset='65'>
                    <Link href="#hero" title='Главная'/>
                    <Link href="#about" title='О нас' />
                    <Link href="#feature" title='Наши проекты'/>
                    <Link href="#feature"title=''/>
                    <Link href="#main" title=''/>
                    <Link href='#main' title=''/>

                    {/* <Link href="#API" title="API">
                    <Link href="#Anchor-Props" title="Anchor Props" />
                    <Link href="#Link-Props" title="Link Props" /> */}
                    {/* </Link> */}
                </Anchor>
            </div>
        </div>
    )
}

export default AppHeader;