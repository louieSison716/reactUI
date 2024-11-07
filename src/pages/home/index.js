/**
 * Page: Home
 * Author: Louie Sison
 */

import React, { useState, useEffect, useCallback, useRef } from 'react'
import {
    LeftMenu,
    MainContent,
    MainContainer
  } from "./stylesComponents";

const Home = () => {

    return (
        <> 
            <MainContainer>
                <LeftMenu>
                    left
                </LeftMenu>
                <MainContent>
                    main
                </MainContent>
            </MainContainer>
        </>
    )

}

Home.propTypes = {}
  
Home.defaultProps = {}

export default Home