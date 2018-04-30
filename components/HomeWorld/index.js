import React, { Fragment } from 'react';
import styled from 'styled-components';

const World = styled.div`
  background: #30343f;
  padding: 12px;
  color: #fafaff;
  display: inline-block;
  border-radius: 4px;
  min-width: 190px;
`;

const Name = styled.p`
  font-size: 20px;
`;

const Detail = styled.p`
  font-size: 18px;
`;

const HomeWorld = ({ name, terrain, population, loading }) => (
  <Fragment>
    <Name>HomeWorld: {loading && 'loading...'}</Name>
    <World>
      <Detail>
        <strong>Planet:</strong> {name}
      </Detail>
      <Detail>
        <strong>Population:</strong> {population}
      </Detail>
      <Detail>
        <strong>Terrain:</strong> {terrain}
      </Detail>
    </World>
  </Fragment>
);

export default HomeWorld;
