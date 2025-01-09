import styled, { createGlobalStyle } from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'column'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'stretch'};
  gap: ${props => props.gap || '0'};
`;




