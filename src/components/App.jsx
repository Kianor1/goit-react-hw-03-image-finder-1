import React, { Component } from 'react';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    largeImageURL: '',
    isLoading: false,
    showModal: false,
  };

  render() {
    return <div>App</div>;
  }
}
