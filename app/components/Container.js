const React = require('react');

class Container extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedList: 'films',
    }

    this._selectList = this._selectList.bind(this);
  }

  _selectList(list) {
    this.setState(() => {
      return {
        selectedList: list,
      }
    });
  }

  render () {
    let lists = ['films', 'people', 'vehicles', 'species', 'locations'];

    return (
      <ul>
        <p>{this.state.selectedList}</p>
        {lists.map((list) => {
          return (
            <li
              onClick={this._selectList.bind(null, list)}
              key={list}>
              {list}
            </li>
          )
        })}
      </ul>
    )
  }
}

module.exports = Container;
