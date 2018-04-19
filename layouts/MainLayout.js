import { Fragment } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const Main = styled.main`
  background: #fafaff;
  padding: 25px;
`;

const MainLayout = ({ children }) => (
  <Fragment>
    <Header />
    <Main>{children}</Main>
  </Fragment>
);

export default MainLayout;
