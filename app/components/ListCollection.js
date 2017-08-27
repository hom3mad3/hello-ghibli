const React = require('react');

import { Films } from './lists/Films';
import { People } from './lists/People';
import { Vehicles } from './lists/Vehicles';
import { Species } from './lists/Species';
import { Locations } from './lists/Locations';

export const ListCollection = (props) => {
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
