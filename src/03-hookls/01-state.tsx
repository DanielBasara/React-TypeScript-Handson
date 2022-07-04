import React,{useState} from 'react'

export default function App() {
    const [name, setname] = useState<string>("jo")
  return (
    <div>App-{name.substring(0,1).toLowerCase()+name.substring(1)}
    <button onClick={()=>{setname("xu")}}>change</button>
    </div>
  )
}
