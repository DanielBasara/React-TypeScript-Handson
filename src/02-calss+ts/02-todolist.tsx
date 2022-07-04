import React, { Component } from 'react'



interface IState{
    text:string,
    list:String[]
}

export default class App extends Component<any,IState> {
    myRef = React.createRef<HTMLInputElement>()
    state={text:"",
  list:[]}
  render() {
    return (
      <div>
        <input type="text" ref={this.myRef}></input>
        <input type="text" value={this.state.text} onChange={(evt)=>{this.setState({text:evt.target.value})}}></input>
        <button onClick={()=>{console.log(this.state.text)
        console.log((this.myRef.current as HTMLInputElement).value)}}>add</button>
      </div>
    )
  }
}
