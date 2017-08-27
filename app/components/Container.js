const React = require('react');
const api = require('../api/api');

import { Films } from './lists/Films';
import { People } from './lists/People';
import { Vehicles } from './lists/Vehicles';
import { Species } from './lists/Species';
import { Locations } from './lists/Locations';
import { ListCollection } from './ListCollection';
const RenderList = require('./RenderList');

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

  render (props) {
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
