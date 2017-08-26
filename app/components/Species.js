const React = require('react');

export const Species = (props) => {
  return (
    <ul>
      {props.content.map((item) => {
        return (
          <li key={item.id}>
            <h3>{item.classification} - {item.name}</h3>
            <p>Eye Colors: {item.red}</p>
            <p>Hair Colors: {item.hair_colors}</p>
          </li>
        )
      })}
    </ul>
  )
}
