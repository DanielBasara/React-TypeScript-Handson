import React,{useEffect,useState} from 'react'
import axios from "axios"
import {RouteComponentProps} from "react-router-dom"

interface FilmItem{
  filmId:number,
  name:String
}


export default function Film(props:RouteComponentProps) {
  const [list, setlist] = useState<any>([])
  useEffect(() => {
    axios(
      {
        url:"https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=6613315",
        headers:{"X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.0","e":"1653834564517406120214529","bc":"110100"}',
        "X-Host": "mall.film-ticket.film.list"}
      }
    ).then(res=>{console.log(res.data.data)
    setlist([...res.data.data.films])
    })

  }, [])
  
  console.log(list)
  return (
    <div>Film

       <ul>

      {list.map((item:FilmItem)=>(<li key={item.filmId} onClick={()=>{console.log(item.filmId,      props.history)
      props.history.push(`/detail/${item.filmId}`)
      
      }}>{item.name}

      </li>))}
      </ul> 

    </div>
  )
}
