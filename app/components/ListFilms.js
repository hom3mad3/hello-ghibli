const React = require('react');
const ReactDOM = require('react-dom');
const axios = require('axios');
import * as api from '../api/films';
import Film from './Film';

const ListFilms = React.createClass({
  getInitialState() {
    return {
      films: []
    }
  },

  componentDidMount() {
    api.getFilms().then(films => {
      this.setState({films: films})
    });
  },

  render() {
      return (
        <Film films={this.state.films} />
      );
    }
});

module.exports = ListFilms;
