import React from 'react'
import {RouteComponentProps} from "react-router-dom"

interface IParam{
    myid:String
}

export default function Detail(props:RouteComponentProps) {
console.log((props.match.params as any).myid)

  return (
    <div>Detail</div>
  )
}
