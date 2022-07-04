import React from 'react'
import {RouteComponentProps} from "react-router-dom"
import store from '../rredux/store'

interface IParam{
    myid:String
}

export default function Detail(props:RouteComponentProps) {
console.log((props.match.params as any).myid)
store.dispatch({type:"hide"})

  return (
    <div>Detail</div>
  )
}
