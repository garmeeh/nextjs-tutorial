import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import MainLayout from '../layouts/MainLayout';
import { getPeopleAPI } from '../api';
import Person from '../components/Person';
import Grid from '../components/Grid';

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  padding: 0 0 10px;
`;

const NavItem = styled.a`
  cursor: pointer;
  display: inline-block;
  align-items: center;
  text-decoration: none;
  text-align: center;
  height: 48px;
  line-height: 46px;
  box-shadow: none;
  font-size: 18px;
  font-weight: 600;
  font-family: 'Open Sans';
  padding: 0 36px;
  border-radius: 4px;
  border: 1px solid #30343f;
  background: #30343f;
  color: #fafaff;
  text-transform: none;
  transition: all 0.25s ease;
  margin: 0 0 0 10px;
  &:hover {
    background: #273469;
    border: 1px solid #273469;
  }
`;

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
        <Nav>
          {previous && (
            <Link
              href={{
                pathname: '/',
                query: { page: this.props.previousPage }
              }}
            >
              <NavItem>Previous</NavItem>
            </Link>
          )}
          {next && (
            <Link
              href={{
                pathname: '/',
                query: { page: this.props.nextPage }
              }}
            >
              <NavItem>Next</NavItem>
            </Link>
          )}
        </Nav>
        <Grid>
          {results.map((person, index) => <Person key={index} {...person} />)}
        </Grid>
      </MainLayout>
    );
  }
}
