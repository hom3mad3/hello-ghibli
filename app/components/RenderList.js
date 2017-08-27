const React = require('react');

export const RenderList = (props) => {
  let lists = ['films', 'people', 'vehicles', 'species', 'locations'];
  return (
    <ul>
      {lists.map((list) => {
        return (
          <li
            style={list === props.selectedList ? { color: '#6290c3' } : null}
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
