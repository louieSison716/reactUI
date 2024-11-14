/**
 * Page: Button
 * Author: Louie Sison
 */

import React, { useState, useEffect, useCallback, useRef } from 'react'
import {
    StyledButton    
  } from "./styledComponents";

const Button = ({ 
    children, 
    onClick, 
    variant = 'text',
    disabled = false
}) => {

    const handleClick = (event) => {
        const buttonText = event.target.textContent;
        if (buttonText) {
            onClick?.(buttonText);
        }
    };

    return (
        <> 
            <StyledButton
                className="styled-button"
                onClick={handleClick}
                $variant={variant}
                $disabled={disabled}
            >
                {children}
            </StyledButton>
        </>
    )

}

Button.propTypes = {}
  
Button.defaultProps = {}

export default Button