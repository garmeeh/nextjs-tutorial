import styled from 'styled-components';

const Hello = styled.div`
  background: goldenrod;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 64px;
  color: #102e37;
`;

const Index = () => <Hello>Hello World</Hello>;

export default Index;
