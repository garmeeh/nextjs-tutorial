import styled from 'styled-components';

const PersonWrapper = styled.div`
  background: #273469;
  color: #fafaff;
  border-radius: 4px;
  overflow: hidden;
  text-align: center;
  box-shadow: -1px 1px 4px 0px rgba(48, 52, 63, 1);
`;

const Header = styled.div`
  padding: 10px 0 0;
`;

const Name = styled.p`
  font-size: 24px;
  font-family: 'Roboto Slab', serif;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const Detail = styled.p`
  font-size: 13px;
`;

const Films = styled.div`
  padding: 10px;
  text-transform: uppercase;
  font-weight: bold;
  background: #30343f;
`;

const Person = ({ name, birth_year, height, films, mass }) => (
  <PersonWrapper>
    <Header>
      <Name>{name}</Name>
    </Header>
    <Details>
      <Detail>
        <strong>D.O.B:</strong> {birth_year}
      </Detail>
      <Detail>
        <strong>Height:</strong> {height}
      </Detail>
      <Detail>
        <strong>Mass:</strong> {mass}
      </Detail>
    </Details>
    <Films>
      <Detail>
        Appears in {films.length} film{films.length > 1 ? 's' : ''}
      </Detail>
    </Films>
  </PersonWrapper>
);

export default Person;
