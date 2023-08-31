import React from 'react';
class Item extends React.Component{
  render(){
    return <li>Item A</li>;
  }
}
class App extends React.Component{
  render(){
    return (
      <div>
        <h1>Hello React</h1>
        <ul>
          <Item/>
          <Item/>
        </ul>
      </div>

    )
  }
}

export default App;