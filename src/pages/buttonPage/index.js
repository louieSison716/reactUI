/**
 * Page: Button page
 * Author: Louie Sison
 * 
 */

import React, { useState, useEffect, useCallback, useRef } from 'react'
import Button from '../../components/button'
import Vessel from '../../components/vessel';
import {
    ButtonPageHolder    
  } from "./styledComponents";

const ButtonPage = () => {
    
    const handleClickText = (label) => {
        console.log(label)
    }

    return (
        <> 
            <div className='content-body'>
                <h1>Button</h1>
                <p className='description'>The Button is an HTML tag interface that can submit forms, trigger JavaScript functions or execute custom actions.</p>
            </div>
            <div className='content-body'>
                <h2>Basic Button</h2>
                <p className='description'>The Button has 3 types, text, contained and outlined.</p>
            </div>
            <Vessel direction="row" justify="flex-start" align="center" gap="10px">
                <Button
                    variant='text'
                    onClick={handleClickText}
                >
                    Text
                </Button>
                <Button
                    variant='contained'
                    disabled={true}
                >
                    Contained
                </Button>
                <Button
                    variant='outlined'
                >
                    Outlined
                </Button>
            </Vessel>
        </>
    )
}

ButtonPage.propTypes = {}
  
ButtonPage.defaultProps = {}

export default ButtonPage