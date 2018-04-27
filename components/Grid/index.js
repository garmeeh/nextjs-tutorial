import React from 'react';
import styled from 'styled-components';

const SimpleGrid = styled.div`
  display: grid;
  grid-gap: 12px;

  @media (min-width: 520px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 820px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Grid = ({ children }) => <SimpleGrid>{children}</SimpleGrid>;

export default Grid;
