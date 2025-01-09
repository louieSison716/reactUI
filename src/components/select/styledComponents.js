import styled, { createGlobalStyle } from "styled-components"

export const SelectContainer = styled.div`
  position: relative;
  width: 200px;
  border-radius: 5px;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid black;
  }
`;

export const SelectButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const DropdownIcon = styled.svg`
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
  transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0)'};
`;

export const SelectOptionList = styled.ul`
  position: absolute;
  top: 103%;
  left: 0;
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
  list-style-type: none;
  padding: 0;
  margin: 0;
  max-height: 200px;
  overflow-y: auto;
  display: ${props => props.isOpen ? 'block' : 'none'};
`;

export const Option = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;


