const React = require('react');
const api = require('../api/api');

import { Films } from './Films';
import { People } from './People';
import { Vehicles } from './Vehicles';
import { Species } from './Species';
import { Locations } from './Locations';

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



const ListCollection = (props) => {
  if (props.selectedList === 'films')
  return (
    <div>
      <Films content={props.content}/>
    </div>
  )
  else if (props.selectedList === 'people')
    return (
      <div>
        <People content={props.content}/>
      </div>
    )
  else if (props.selectedList === 'vehicles')
    return (
      <div>
        <Vehicles content={props.content}/>
      </div>
    )
  else if (props.selectedList === 'species')
    return (
      <div>
        <Species content={props.content}/>
      </div>
    )
  else
    return (
      <div>
        <Locations content={props.content}/>
      </div>
    )
}

class Container extends React.Component {
  constructor (props) {
    super();
    this.state = {
      selectedList: 'films',
      content: null
    };

    this._selectList = this._selectList.bind(this);
  }

  _selectList(list) {
    this.setState(() => {
      return {
        selectedList: list,
        content: null
      }
    });

    api.fetchLists(list)
      .then((content) => {
        this.setState(() => {
          return {
            content: content
          }
        });
        console.log(content);
    });
  }

  componentDidMount() {
    this._selectList(this.state.selectedList);
  }

  render () {
    return (
      <div>
      <RenderList
      selectedList={this.state.selectedList}
      onSelect={this._selectList} />
      {!this.state.content ? <p>Loading</p> : <ListCollection selectedList={this.state.selectedList} content={this.state.content}/>}
      {console.log(this.state.selectedList) }
      </div>
    )
  }
}

module.exports = Container;
