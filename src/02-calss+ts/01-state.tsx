import React, { Component } from 'react'

interface IState{
    name:string
}

//约束类，<属性约定，状态约定>
export default class App extends Component<any,IState> {

    state={
        name:"jo"
    }
  render() {
    return (
      <div>App-{this.state.name.substring(0,1).toUpperCase()+this.state.name.substring(1)}
      <button onClick={()=>{this.setState({name:"xu"})}}>change</button>
      </div>
    )
  }
}
