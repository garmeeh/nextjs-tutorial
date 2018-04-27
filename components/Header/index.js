import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background: #30343f;
  padding: 25px 20px;
  text-align: center;
`;

const Img = styled.img`
  max-width: 460px;
  width: 100%;
  height: auto;
`;

const Header = () => (
  <HeaderWrapper>
    <Img src="/static/images/logo-light.png" />
  </HeaderWrapper>
);

export default Header;
