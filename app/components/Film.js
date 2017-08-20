const React = require('react');
const ReactDOM = require('react-dom');
import { Link } from 'react-router';

export default function(props) {
  return (
    <div>
      {props.films.map(film => {
        return (
          <div key={film.id} className="film">
            <a href={`https://ghibliapi.herokuapp.com/films/${film.id}`}>
              {film.release_date} ◦ {film.title} ◦ {film.director}
            </a>
            <p>{film.description}</p>
          </div>
        );
      })}
    </div>
  )
}
