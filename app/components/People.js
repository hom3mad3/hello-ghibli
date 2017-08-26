const React = require('react');
const ReactDOM = require('react-dom');
import { Link } from 'react-router';

export const People = (props) => {
  return (
    <ul key={props.selectedList}>
      {props.content.map((item) => {
        return (
          <li key={item.id}>
            <h3>{item.name} </h3>
            <p>Gender: {item.gender}</p>
            <p>Age: {item.age}</p>
            <p>Eye Color: {item.eye_color}</p>
            <p>Hair Color: {item.hair_color}</p>
          </li>
        )
      })}
    </ul>
  )
}


export default function(props) {
  return (
    <div>
      {props.people.map(person => {
        return (
          <div key={person.id}>
            {person.name}, {person.gender}, {person.age}
          </div>
        )
      })}
    </div>
  )
}
