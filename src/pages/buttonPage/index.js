/**
 * Page: Button page
 * Author: Louie Sison
 * 
 */

import React, { useState, useEffect, useCallback, useRef } from 'react'
import Button from '../../components/button'
import {
    ButtonPageHolder    
  } from "./styledComponents";

const ButtonPage = () => {
    
    const handleClickText = (label) => {
        console.log(label)
    }

    return (
        <> 
            <ButtonPageHolder
                className='button-page-holder'
            >
                <Button
                    variant='text'
                    onClick={handleClickText}
                    disabled={true}
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
                    disabled={true}
                >
                    Outlined
                </Button>
            </ButtonPageHolder>
        </>
    )
}

ButtonPage.propTypes = {}
  
ButtonPage.defaultProps = {}

export default ButtonPage