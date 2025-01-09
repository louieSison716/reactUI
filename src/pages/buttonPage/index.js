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
                <Vessel direction="row" justify="flex-start" align="center" gap="10px">
                    <Button
                        variant='text'
                        onClick={handleClickText}
                    >
                        Text
                    </Button>
                    <Button
                        variant='contained'
                    >
                        Contained
                    </Button>
                    <Button
                        variant='outlined'
                    >
                        Outlined
                    </Button>
                </Vessel>
            </div>
            <div className='content-body'>
                <h2>Text Button</h2>
                <Vessel direction="row" justify="flex-start" align="center" gap="10px">
                    <Button
                        variant='text'
                        onClick={handleClickText}
                    >
                        Primary
                    </Button>
                    <Button
                        variant='text'
                        disabled={true}
                    >
                        Disabled
                    </Button>
                    <Button
                        variant='text'
                        disabled={true}
                        link={true}
                    >
                        Link
                    </Button>
                </Vessel>
            </div>
            <div className='content-body'>
                <h2>Contained Button</h2>
                <Vessel direction="row" justify="flex-start" align="center" gap="10px">
                    <Button
                        variant='contained'
                        onClick={handleClickText}
                    >
                        Primary
                    </Button>
                    <Button
                        variant='contained'
                        disabled={true}
                    >
                        Disabled
                    </Button>
                    <Button
                        variant='contained'
                        link={true}
                    >
                        Disabled
                    </Button>
                </Vessel>
            </div>
            <div className='content-body'>
                <h2>Outlined Button</h2>
                <Vessel direction="row" justify="flex-start" align="center" gap="10px">
                    <Button
                        variant='outlined'
                        onClick={handleClickText}
                    >
                        Primary
                    </Button>
                    <Button
                        variant='outlined'
                        disabled={true}
                    >
                        Disabled
                    </Button>
                    <Button
                        variant='outlined'
                        link={true}
                    >
                        Disabled
                    </Button>
                </Vessel>
            </div>
        </>
    )
}

ButtonPage.propTypes = {}
  
ButtonPage.defaultProps = {}

export default ButtonPage