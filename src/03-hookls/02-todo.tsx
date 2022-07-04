import React, { useRef,useState } from 'react'

export default function App() {
    const mytext = useRef<HTMLInputElement>(null)
    const [list, setlist] = useState<string[]>([])
  return (
    <div>App
        <input ref={mytext}></input>
        <button onClick={()=>{console.log((mytext.current as HTMLInputElement).value)
        setlist([...list,(mytext.current as HTMLInputElement).value ])
        }}>click</button>
        <ul>
            {list.map((items,index)=>(<li key={index}>{items} </li>))}
        </ul>
    </div>
  )
}
