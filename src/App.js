import React, { Component } from 'react';
import './App.css';
import Custom from './components/Custom';


const customs = [
  {
  'id':1,
  'image':'https://placeimg.com/64/64/1',
  'name': 'Water Road',
  'location': 'Ocenas 32N 55E',
  'explanation': 'This is water road'
},
{
  'id':2,
  'image':'https://placeimg.com/64/64/2',
  'name': 'Plain',
  'location': 'Ocenas 32N 55E',
  'explanation': 'This is plain road'
},
{
  'id':3,
  'image':'https://placeimg.com/64/64/3',
  'name': 'Desert Road',
  'location': 'Ocenas 32N 55E',
  'explanation': 'This is desert road'
}
]

class App extends Component {
  render () {
    return (
      <div>
        {customs.map(c => { return ( <Custom key={c.id} id={c.id} image={c.image} name={c.name} location={c.location} explanation={c.explanation} /> )})}
      </div>


    );
  }
    
}

export default App;
