const React = require('react');

export const RenderList = (props) => {
  let lists = ['films', 'people', 'vehicles', 'species', 'locations'];
  return (
    <ul className="nav">
      {lists.map((list) => {
        return (
          <li
            className={list === props.selectedList ? "active" : null}
            onClick={props.onSelect.bind(null, list)}
            key={list}>
            {list}
          </li>
        )
      })}
    </ul>
  )
}

module.exports = RenderList;
