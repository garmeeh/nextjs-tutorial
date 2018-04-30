import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import MainLayout from '../layouts/MainLayout';
import { getPersonAPI } from '../api';
import FetchData from '../components/FetchData';
import HomeWorld from '../components/HomeWorld';

export default class extends Component {
  static defaultProps = {
    person: {}
  };

  static async getInitialProps(ctx) {
    const { id } = ctx.query;
    const person = await getPersonAPI(id);
    return {
      person
    };
  }

  render() {
    const { person } = this.props;
    return (
      <MainLayout>
        <Link href="/">
          <a>Back</a>
        </Link>
        <h1>{person.name}</h1>
        <ul>
          <li>Height: {person.height}</li>
          <li>Mass: {person.mass}</li>
          <li>Hair Colour(s): {person.hair_color}</li>
          <li>Skin Colour(s): {person.skin_color}</li>
          <li>Eye Colour: {person.eye_color}</li>
          <li>Birth Year: {person.birth_year}</li>
          <li>Gender: {person.gender}</li>
        </ul>
        <FetchData url={person.homeworld}>
          {({ data, loading }) => {
            return <HomeWorld {...data} loading={loading} />;
          }}
        </FetchData>
      </MainLayout>
    );
  }
}
