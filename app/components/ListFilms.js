const React = require('react');
const ReactDOM = require('react-dom');
const axios = require('axios');
import * as api from '../api/films';

class ListFilms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      show: false
    }
  }

  componentDidMount() {
    api.getFilms().then(films => {
      this.setState({films: films})
    });
  }

  _handleClick(props) {
    this.setState({
      show: true
    });
  }

  render() {
    let films = this.state.films;
    let sortedByDate = films.sort((a, b) => {return a.release_date - b.release_date});
    return (
      <div>
        <h1>Hello Ghibli</h1>
        {sortedByDate.map((film) => {
          return (
            <div key={film.id} className="film">
              <a onClick={this._handleClick} href={`https://ghibliapi.herokuapp.com/films/${film.id}`}>
                {film.release_date} ◦ {film.title}
              </a>
              <div show={this.state.show}>
              <p> {film.director}</p>
              <p>{film.description}</p>
            </div>
            </div>
          );
        })}
      </div>
    )
  }
}

module.exports = ListFilms;
