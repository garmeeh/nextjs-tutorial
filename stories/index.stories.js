import React from 'react';
import { storiesOf } from '@storybook/react';
import Person from '../components/Person';

const stories = storiesOf('Person', module);

const mockPerson = {
  name: 'Biggs Darklighter',
  birth_year: '24BBY',
  height: '183',
  films: ['https://swapi.co/api/films/1/']
};

stories.add('Solo', () => <Person {...mockPerson} />);
