import React, { Component } from 'react'

export default class App extends Component {
    state={
        isShow:true
    }
  render() {
    return (
      <div>App
        <Navbar title="首页" cb={()=>{
            this.setState({isShow:!this.state.isShow})
        }}></Navbar>
           {this.state.isShow&& <Sidebar></Sidebar>}
      </div>
    )
  }
}

interface Iprops{
    title:string
    cb:()=>void
}

class Navbar extends Component<Iprops,any>{
    render(){
        return <div>Navbar-{this.props.title}
        <button onClick={()=>{this.props.cb()}}>show</button>
        </div>
    }
}
class Sidebar extends Component{
    render(){
        return <div>Sidebar</div>
    }
}