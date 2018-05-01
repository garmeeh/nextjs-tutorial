import React from 'react';
import { render } from 'react-testing-library';
import 'dom-testing-library/extend-expect';
import Person from '../';

const mockPerson = {
  name: 'Biggs Darklighter',
  birth_year: '24BBY',
  height: '183',
  films: ['https://swapi.co/api/films/1/']
};

it('matches snapshot', () => {
  const { container } = render(<Person {...mockPerson} />);
  expect(container.firstChild).toMatchSnapshot();
});

it('film is singular', () => {
  const { getByTestId } = render(<Person {...mockPerson} />);
  expect(getByTestId('films').innerHTML).toBe('Appears in 1 film');
});

it('film is pluralised', () => {
  mockPerson.films.push('https://swapi.co/api/films/2/');
  const { getByTestId } = render(<Person {...mockPerson} />);
  expect(getByTestId('films').innerHTML).toBe('Appears in 2 films');
});
