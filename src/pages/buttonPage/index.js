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
    
    return (
        <> 
            <ButtonPageHolder
                className='button-page-holder'
            >
                <Button
                    variant='text'
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
            </ButtonPageHolder>
        </>
    )
}

ButtonPage.propTypes = {}
  
ButtonPage.defaultProps = {}

export default ButtonPage