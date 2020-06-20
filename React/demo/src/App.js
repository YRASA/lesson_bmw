import React, { Component } from 'react';

class App extends Component {
  render() { 
    return ( 
      // JSX
      <ul className="my-list">
        <li>{ true ? 'React' : 'null' }</li>
        <li>Vue</li>
      </ul>
     )
    //  let child1 = React.createElement('li', null, 'React')
    //  let child2 = React.createElement('li', null, 'Vue')
    //  let root = React.createElement('ul', {className="my-list"}, child1, child2)
  }
}
 
export default App;