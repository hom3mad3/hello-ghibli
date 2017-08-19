const React = require('react');
const ReactDOM = require('react-dom');
const axios = require('axios');


class ListFilms extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      films: []
    }
  }

  componentDidMount() {
      axios.get("https://ghibliapi.herokuapp.com/films")
        .then((result) => {
          this.setState({
            films: result.data,
          });
        })
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {
    return (
      <div>
        <h1>Hello Ghibli</h1>
        {this.state.films.map((film) => {
          return (
            <div key={film.id} className="film">
              <a href={film.title}>
                {film.title}
              </a>
            </div>
          );
        })}
      </div>
    )
  }
}

module.exports = ListFilms;
