/**
 * Page: Button
 * Author: Louie Sison
 */

import React, { useState, useEffect, useCallback, useRef } from 'react'
import {
    StyledButton    
  } from "./styledComponents";

const Button = ({ children, onClick, color = 'blue', variant = 'text' }) => {

    return (
        <> 
            <StyledButton
                className={`padding-2 shadow-none hover:shadow background-light-${color} hover:background-dark-${color}`}
                onClick={onClick}
                $variant={variant}
            >
                {children}
            </StyledButton>
        </>
    )

}

Button.propTypes = {}
  
Button.defaultProps = {}

export default Button