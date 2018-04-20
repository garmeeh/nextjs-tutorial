import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import MainLayout from '../layouts/MainLayout';
import { getPeopleAPI } from '../api';

export default class extends Component {
  static defaultProps = {
    results: [],
    next: null,
    previous: null
  };

  static async getInitialProps(ctx) {
    const { query } = ctx;
    const { page = 1 } = query;
    const pageNumber = parseInt(page);
    const response = await getPeopleAPI(pageNumber);
    const { results, next, previous } = response;
    return {
      results,
      next,
      previous,
      page: pageNumber,
      nextPage: pageNumber + 1,
      previousPage: pageNumber - 1
    };
  }

  render() {
    const { results, next, previous } = this.props;
    return (
      <MainLayout>
        {results.map((person, index) => <p key={index}>{person.name}</p>)}
        {previous && (
          <Link
            href={{
              pathname: '/',
              query: { page: this.props.previousPage }
            }}
          >
            <a>Previous</a>
          </Link>
        )}
        {next && (
          <Link
            href={{
              pathname: '/',
              query: { page: this.props.nextPage }
            }}
          >
            <a>Next</a>
          </Link>
        )}
      </MainLayout>
    );
  }
}
