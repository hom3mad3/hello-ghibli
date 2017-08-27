const React = require('react');

export const Locations = (props) => {
  return (
    <ul key={props.selectedList}>
      {props.content.map((item) => {
        return (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>Climate: {item.climate}</p>
            <p>Terrain: {item.terrain}</p>
            <p>Surface Water: {item.surface_water}</p>
          </li>
        )
      })}
    </ul>
  )
}
