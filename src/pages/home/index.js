/**
 * Page: Home
 * Author: Louie Sison
 */

import React, { useState, useEffect, useCallback, useRef } from 'react'
import { Outlet, Link } from 'react-router-dom';
import {
    GlobalStyle,
    LeftMenu,
    MainContent,
    MainContainer,
    MenuList,
    MenuListItem,
    LeftMenuTitle
  } from "./stylesComponents";

const Home = ({children}) => {

    const [menuList, setMenuList] = useState([
        {
            name: 'Autocomplete',
            isActive: true,
            href: '/autocomplete'
        },
        {
            name: 'Button',
            isActive: false,
            href: '/button'
        },
        {
            name: 'Button Group',
            isActive: false,
            href: '/button-group'
        },
        {
            name: 'Select',
            isActive: false,
            href: '/select'
        },
    ])

    const onMenuChange = (index) => {
        console.log('onMenuChange')
        console.log(index)
        // if(keypadVal.length < 5){
        //     props.onKeypadChange(value)
        // } 
    }

    const renderMenuList = (e) => {
        return menuList.map((item,index,arr) => {
            return (
                <MenuListItem
                    className='menu-list__item'
                    key={`${index + '-' + item.name}`}
                >
                    <span
                        onClick={() => onMenuChange(index)}
                    >
                        <a href={item.href}>{item.name}</a>
                    </span>
                </MenuListItem>
            )
         })
    }

    return (
        <> 
            <GlobalStyle/>
            <MainContainer
                className='main-container'
            >
                <LeftMenu
                    className='left-menu'
                >
                    <LeftMenuTitle>
                        React UI <span className='title-version'>v1</span>
                    </LeftMenuTitle>
                    <MenuList
                        className="menu-list"
                    >
                        {renderMenuList()}
                    </MenuList>
                </LeftMenu>
                <MainContent
                    className='main-content'
                >
                   <Outlet/>
                </MainContent>
            </MainContainer>
        </>
    )

}

Home.propTypes = {}
  
Home.defaultProps = {}

export default Home