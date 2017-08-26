const React = require('react');

export const Films = (props) => {
  return (
    <ul key={props.selectedList}>
      {props.content.map((item) => {
        return (
          <li key={item.id}>
            <h3>{item.release_date} {item.title}</h3>
            <p>Directed by: {item.director}</p>
            <p>{item.description}</p>
          </li>
        )
      })}
    </ul>
  )
}
