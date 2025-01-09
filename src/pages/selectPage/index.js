/**
 * Page: Select Page
 * Author: Louie Sison
 * 
 */

import React, { useState, useEffect, useCallback, useRef } from 'react'
import Select from '../../components/select'

const SelectPage = () => {
    
    const options = [
        { value: 'Option 1', label: 'Option 1' },
        { value: 'Option 2', label: 'Option 2' },
        { value: 'Option 3', label: 'Option 3' },
      ];
    
      const handleChange = (selectedOption) => {
        console.log('Selected:', selectedOption);
      };

    return (
        <> 
            <Select 
                options={options} 
                onChange={handleChange} 
                label='Please Choose'
                />
        </>
    )

}

SelectPage.propTypes = {}
  
SelectPage.defaultProps = {}

export default SelectPage