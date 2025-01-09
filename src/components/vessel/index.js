import React from 'react';
import {
    Container
} from './styledComponents'

const Vessel = ({ children, direction, justify, align, gap }) => {
  return (
    <Container 
        className='container'
        direction={direction} 
        justify={justify} 
        align={align} 
        gap={gap}>
      {children}
    </Container>
  );
};

export default Vessel;