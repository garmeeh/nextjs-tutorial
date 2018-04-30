import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';

class FetchData extends Component {
  state = {
    data: {},
    loading: true
  };

  getData = async url => {
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      loading: false,
      data
    });
  };

  componentDidMount() {
    this.getData(this.props.url);
  }

  render() {
    const { data, loading } = this.state;
    return this.props.children({ data, loading });
  }
}

export default FetchData;
