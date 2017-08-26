const React = require('react');

export const Films = (props) => {
  return (
    <ul>
      {props.content.map((item) => {
        return (
          <li key={item.name}>
            <h3>{item.release_date} {item.title}</h3>
            <p>Directed by: {item.director}</p>
            <p>{item.description}</p>
          </li>
        )
      })}
    </ul>
  )
}
