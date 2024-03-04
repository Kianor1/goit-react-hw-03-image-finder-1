import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { Button } from './Button/Button.jsx';

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
    return (
      <div>
        <Searchbar />
        <Button />
      </div>
    );
  }
}
