/**
 * Page: Button
 * Author: Louie Sison
 */

import React, { useState, useEffect, useCallback, useRef } from 'react'
import {
    StyledButton,
    StyledLink    
  } from "./styledComponents";

const Button = ({ 
    children, 
    onClick, 
    variant = 'text',
    disabled = false,
    link = false,
    href = '/'
}) => {

    const handleClick = (event) => {
        const buttonText = event.target.textContent;
        if (buttonText) {
            onClick?.(buttonText);
        }
    };

    if(link){
        return (
            <>
                <StyledLink 
                    href={href}
                    className="styled-button"
                    onClick={handleClick}
                    $variant={variant}
                    $disabled={disabled}
                >
                    LINK
                </StyledLink>
            </>
        )
    }

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