/**
 * Page: Select
 * Author: Louie Sison
 */

import React, { useState } from 'react';
import {
    SelectContainer,
    SelectButton,
    DropdownIcon,
    OptionsList,
    Option
} from './styledComponents';

const Select = ({ options, onChange, label = 'Select an option' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option);
  };

  return (
    <SelectContainer className='select-container'>
      <SelectButton onClick={toggleDropdown}>
        {selectedOption ? selectedOption.label : label}
        <DropdownIcon isOpen={isOpen} viewBox="0 0 24 24">
          <path d="M7 10l5 5 5-5z" />
        </DropdownIcon>
      </SelectButton>
      <OptionsList isOpen={isOpen}>
        {options.map((option) => (
          <Option key={option.value} onClick={() => handleOptionClick(option)}>
            {option.label}
          </Option>
        ))}
      </OptionsList>
    </SelectContainer>
  );
};

export default Select;