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
        <Custom
          id={customs[0].id}
          image={customs[0].image}
          name={customs[0].name}
          location={customs[0].location}
          explanation={customs[0].explanation}
        />
        <Custom
          id={customs[1].id}
          image={customs[1].image}
          name={customs[1].name}
          location={customs[1].location}
          explanation={customs[1].explanation}
        />
        <Custom
          id={customs[2].id}
          image={customs[2].image}
          name={customs[2].name}
          location={customs[2].location}
          explanation={customs[2].explanation}
        />
      </div>


    );
  }
    
}

export default App;
