const React = require('react');

export const Species = (props) => {
  return (
    <ul key={props.selectedList} className="container">
      {props.content.map((item) => {
        return (
          <li key={item.id} className="item">
            <h3>{item.classification} - {item.name}</h3>
            <p>Eye Colors: {item.red}</p>
            <p>Hair Colors: {item.hair_colors}</p>
          </li>
        )
      })}
    </ul>
  )
}
