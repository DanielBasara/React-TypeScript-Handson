
import React from 'react'

export default function App() {
  return (
    <div>App
        <Child name="jo"></Child>
        <Baby name="xu"></Baby>
    </div>
  )
}

interface Iprops{
    name:string
}

function Child(props:Iprops){
    return <div>Child-{props.name}</div>
}

const Baby:React.FC<Iprops> =(props)=>{
    return <div>Child-{props.name}</div>
}