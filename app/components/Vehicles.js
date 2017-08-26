const React = require('react');

export const Vehicles = (props) => {
  return (
    <ul key={props.selectedList}>
      {props.content.map((item) => {
        return (
          <li key={item.id}>
            <h3>{item.name} - {item.vehicle_class}</h3>
            <p>{item.description}</p>
            <p>Pilot: {item.pilot.id}</p>
          </li>
        )
      })}
    </ul>
  )
}
