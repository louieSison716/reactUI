/**
 * Page: Home
 * Author: Louie Sison
 */

import React, { useState, useEffect, useCallback, useRef } from 'react'
import { Outlet, Link } from 'react-router-dom';
import {
    LeftMenu,
    MainContent,
    MainContainer,
    MenuList
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
                <li
                    key={`${index + '-' + item.name}`}
                >
                    <span
                        onClick={() => onMenuChange(index)}
                    >
                        <a href={item.href}>{item.name}</a>
                    </span>
                </li>
            )
         })
    }

    return (
        <> 
            <MainContainer>
                <LeftMenu>
                    <MenuList
                        className="menu-list"
                    >
                        {renderMenuList()}
                    </MenuList>
                </LeftMenu>
                <MainContent>
                   <Outlet/>
                </MainContent>
            </MainContainer>
        </>
    )

}

Home.propTypes = {}
  
Home.defaultProps = {}

export default Home