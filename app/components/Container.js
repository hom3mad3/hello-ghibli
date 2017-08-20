const React = require('react');

const RenderList = (props) => {
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

class Container extends React.Component {
  constructor (props) {
    super();
    this.state = {
      selectedList: 'films'
    };

    this._selectList = this._selectList.bind(this);
  }

  _selectList(list) {
    this.setState(() => {
      return {
        selectedList: list
      }
    });
  }

  render () {
    return (
      <RenderList
      selectedList={this.state.selectedList}
      onSelect={this._selectList} />
    )
  }
}

module.exports = Container;
