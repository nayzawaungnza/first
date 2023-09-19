import React from 'react';
class Item extends React.Component{
  render(){
    return (
      <li>
      {this.props.name},
      ${this.props.price}
      </li>
    );
  }
}
class App extends React.Component{
  state = {
    items:[
      {id:1, name:'Apple', price:0.99},
      {id:2, name:'Orange', price:0.88},
      {id:2, name:'Seed', price:0.77}
    ]
  };
  add = () => {
    let id = this.state.items.length + 1;
    this.setState({
      items:[
        ...this.state.items,
      {id,name:`Item ${id}`, price:0.01 * id}
      ]
    })
  }
  render(){
    return (
      <div>
        <h1>Hello React</h1>
        <ul>
          {this.state.items.map(i=>{
            return(
              <Item name={i.name} price={i.price}></Item>
            )
          })}
        </ul>
        <button onClick={this.add}>Add</button>
      </div>

    )
  }
}

export default App;