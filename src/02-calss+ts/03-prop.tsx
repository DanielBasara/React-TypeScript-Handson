import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div><Child name="jo"></Child></div>
    )
  }
}

interface Iprops{
    name:string
}

class Child extends Component<Iprops,any>{
    render(){
        return <div>
            child-{this.props.name}
        </div>
    }
}