import React,{useEffect} from 'react'
import IndexRouter from './router'
import store from './rredux/store'

export default function App() {
useEffect(() => {
  store.subscribe(()=>{console.log(store.getState())})

}, [])



  return (
    <div>
      <IndexRouter>

      </IndexRouter>

      <ul>
        <li>电影</li>
        <li>影院</li>
        <li>我的</li>
      </ul>
    </div>
  )
}
